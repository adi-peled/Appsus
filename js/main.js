import appHeader from './main-cmps/app-header.cmp.js';
import { Utils } from './main-services/utils.js'
// import {eventBus} from '../../main-services/eventBus.js';

import { myRouter } from './routes.js'
import { eventBus } from './main-services/eventBus.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <section>
    <app-header   v-if="!isHomePage"   @homePage="updateHomePage">  </app-header>
    <main>
        <router-view />
    </main>
      

    </section>
    `,
    data: {
        isHomePage: true
    },
    methods: {
        updateHomePage() {
            console.log('hhh')
            this.isHomePage = true
        },
        updateNotHomePage() {
            this.isHomePage = false
        }

    },
    components: {
        appHeader
    },
    created() {
        eventBus.$on('updateHomePage', this.updateNotHomePage)
    }
})