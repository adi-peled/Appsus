import homePage from './missBooks/pages/home-page.cmp.js';
import bookApp from './missBooks/pages/book-app.cmp.js';
import bookDetails from './missBooks/pages/book-details.cmp.js';


const myRoutes = [
    {   
        path: '/',
        component: homePage
    },
    {
        path:'/note',
        // component:noteApp
    },
    {
        path:'/email',
        // component:emailApp
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
