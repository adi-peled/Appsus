import appHeader from './main-cmps/app-header.cmp.js';
// import Utils from './main-services/utils'
// import {eventBus} from '../../main-services/eventBus.js';

import { myRouter } from './routes.js'

new Vue({
  el: '#app',
  router: myRouter,
  template: `
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
  methods: {
  },
  components: {
    appHeader
  },
})