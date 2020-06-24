// import  bookApp from  './pages/book-app.cmp.js';
import  appHeader from  './main-cmps/app-header.cmp.js';

import {myRouter} from './routes.js'

new Vue({
    el:'#app',
    router: myRouter,
    template:`
    <section>
    <app-header>  </app-header>
    <main>
        <router-view />
    </main>
    <footer>  
       Footer
    </footer>


    </section>
    `,
    methods:{
    },
    components: {
      // bookApp,
      appHeader
    },
})