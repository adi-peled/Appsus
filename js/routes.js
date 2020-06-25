import homePage from './missBooks/pages/home-page.cmp.js';
import bookApp from './missBooks/pages/book-app.cmp.js';
import bookDetails from './missBooks/pages/book-details.cmp.js';
import emailApp from './missEmail/cmps/email-app.cmp.js';
import noteApp from './missKeep/cmps/note-app.cmp.js';
import emailStarred from './missEmail/pages/starred-pages.js';
import emailList from './missEmail/cmps/email-list.cmp.js';
import newMail from './missEmail/pages/new-mail-page.js';
import sentMails from './missEmail/pages/sent-mails.js';

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
        path: '/email/newMail',
        component: newMail
    },
    {
        path: '/email/sentMails',
        component: sentMails
    }
    ]
},
{
    path: '/book',
    component: bookApp
},
{
    path: '/email/inbox',
    component: emailList
},
{
    path: '/book/:bookId',
    component: bookDetails
}
];




export const myRouter = new VueRouter({ routes: myRoutes })