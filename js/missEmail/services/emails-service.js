import { Utils } from '../../main-services/utils.js'
export const emailsService = {
    getEmails,
    deleteMail,
    getStarredEmails,
    newStarredList,
    mailRead,
    sendNewMail,
    getSentMails,
    getMail,
    getProgress
}


function deleteMail(id) {
    var emails = Utils.loadFromStorage('emails')
    const emailIdx = emails.findIndex(email => email.id === id)
    if (emailIdx !== -1) {
        emails.splice(emailIdx, 1)
        Utils.storeToStorage('emails', emails)
        console.log('deleteEmails', emails);

    } else {
        const sentEmail = Utils.loadFromStorage('sentMails').findIndex(email => email.id === id)
        var sendEmails = Utils.loadFromStorage('sentMails')
        sendEmails.splice(sentEmail, 1)
        Utils.storeToStorage('sentMails', sendEmails)
    }

    getStarredEmails()
        .then(res => Utils.storeToStorage('starred', res))
}

function getEmails() {
    var mails = Utils.loadFromStorage('emails');
    console.log('getEmails Working', mails);
    if (!mails || mails.length === 0) mails = emails;
    return Promise.resolve(mails)
}


function mailRead(id) {
    var emails = Utils.loadFromStorage('emails');
    const email = emails.findIndex(email => {
        if (email.id === id) {
            return email
        }
    })
    if (email === -1) return
    emails[email].isRead = true;
    console.log('hi');

    Utils.storeToStorage('emails', emails)

}


function newStarredList(id) {
    var emails = Utils.loadFromStorage('emails')
    const email = emails.findIndex(email => {
        if (email.id === id) {
            return email
        }
    })
    if (emails[email].isStarred) {
        emails[email].isStarred = false;
    } else {
        emails[email].isStarred = true;
    }

    Utils.storeToStorage('emails', emails)


    getStarredEmails()
        .then(res => Utils.storeToStorage('starred', res))

}

function getStarredEmails() {
    var starredEmails = emails.filter(email => email.isStarred)
    Utils.storeToStorage('starred', starredEmails)
    return Promise.resolve(starredEmails)
}



function getSentMails() {
    var mails = Utils.loadFromStorage('sentMails')
    return mails
}

function sendNewMail(name, email, sub, msg, isDraft) {
    var newMail = {
        from: name,
        fromMail: email,
        subject: sub,
        body: msg,
        isRead: true,
        sentAt: Date.now(),
        isSent: true,
        isStarred: false,
        isDraft: isDraft,
        id: Utils.getRandomId()
    }
    var sentMails = Utils.loadFromStorage('emails')
    sentMails.push(newMail)
    Utils.storeToStorage('emails', sentMails)

}

function getMail(id) {
    var newEmails = Utils.loadFromStorage('emails')
    const email = newEmails.findIndex(email => {
        if (email.id === id) {
            return email
        }
    })
    return newEmails[email]

}


var sentMails = []

function getProgress() {
    var count = 0;
    var newEmails = Utils.loadFromStorage('emails')
    newEmails.forEach(email => {
        if (email.isRead === true) {
            count++
        }
    })
    return { max: newEmails.length, value: count }

}



var emails = [{
    from: 'Roee',
    fromMail: 'roee@maor&adi.com',
    subject: 'Need to talk ASAP!!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isRead: false,
    sentAt: Date.now(),
    isStarred: false,
    isSent: false,
    id: 'asdasdkn'
}, {
    from: 'Nir',
    fromMail: 'nir@maor&adi.com',
    subject: 'Haha last night was litt!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isRead: false,
    sentAt: Date.now(),
    isStarred: false,
    isSent: false,
    id: 'aaswwrqt'
}, {
    from: 'Shir',
    fromMail: 'shir@maor&adi.com',
    subject: 'hi man what up ',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isRead: false,
    sentAt: Date.now(),
    isSent: false,
    isStarred: true,
    id: 'poqiweui'
}, {
    from: 'Ron',
    fromMail: 'ron@maor&adi.com',
    subject: 'dude you good?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isRead: false,
    sentAt: Date.now(),
    isStarred: false,
    isSent: false,
    id: ',mqwyetg'
}, {
    from: 'Sean',
    fromMail: 'sean@maor&adi.com',
    subject: 'cant beleive you did that !',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isRead: false,
    sentAt: Date.now(),
    isStarred: true,
    isSent: false,
    id: 'qweopiu'
}, ]