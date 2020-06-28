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
            let timerInterval
            Swal.fire({
                title: 'Messege',
                html: msg,
                timer: 700,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
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