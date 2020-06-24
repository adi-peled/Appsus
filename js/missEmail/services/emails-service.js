export const mailService = {
    getUnReadAmount
}

function getUnReadAmount() {
    var count = 0;
    mails.forEach(mail => {
        if (mail.isRead === true) count++;
    })
    return count

}

mails = [{
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: true,
    sentAt: new Date()
}, {
    subject: 'subject',
    body: 'body',
    isRead: false,
    sentAt: new Date()
}]