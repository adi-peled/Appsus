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
        },
        showMessege(msg) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: msg
            })
        }

    },
    components: {
        appHeader
    },
    created() {
        eventBus.$on('updateHomePage', this.updateNotHomePage)
        eventBus.$on('alertMsg', this.showMessege)

    }
})