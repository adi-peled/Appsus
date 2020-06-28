import appHeader from './main-cmps/app-header.cmp.js';
import { Utils } from './main-services/utils.js'
import { myRouter } from './routes.js'
import { eventBus } from './main-services/eventBus.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <section>
    <app-header   v-if="!isHomePage"       @homePage="updateHomePage">  </app-header>
    <main>
        <router-view  @onHomePage="updateHomePage">      </router-view>
    </main>
      

    </section>
    `,
    data: {
        isHomePage: false
    },
    methods: {
        updateHomePage() {
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