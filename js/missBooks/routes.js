import homePage from './pages/home-page.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import about from './pages/about.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutTeam from './pages/about-team.cmp.js';
import aboutServices from './pages/about-service.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: about,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutServices

            }

        ]
    }
];

export const myRouter = new VueRouter({ routes: myRoutes })
