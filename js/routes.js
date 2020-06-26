import homePage from './missBooks/pages/home-page.cmp.js';
import bookApp from './missBooks/pages/book-app.cmp.js';
import bookDetails from './missBooks/pages/book-details.cmp.js';
import emailApp from './missEmail/cmps/email-app.cmp.js';
import noteApp from './missKeep/cmps/note-app.cmp.js';
import emailStarred from './missEmail/pages/starred-pages.js';
import emailList from './missEmail/cmps/email-list.cmp.js';
import newMail from './missEmail/pages/new-mail-page.js';
import sentMails from './missEmail/pages/sent-mails.js';
import emailDetails from './missEmail/cmps/email-details.cmp.js';
import drafts from './missEmail/pages/drafts-page.js';

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [{

                path: '/email/starred',
                component: emailStarred
            },
            {
                path: '/email/inbox',
                component: emailList
            },
            {
                path: '/email/inbox/:mailId',
                component: emailDetails
            },
            {
                path: '/email/newMail',
                component: newMail
            },
            {
                path: '/email/sentMails',
                component: sentMails
            },
            {
                path: '/email/drafts',
                component: drafts
            }
        ]
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
];

export const myRouter = new VueRouter({ routes: myRoutes })