import { emailsService } from '../services/emails-service.js'
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'sideBar',
    template: `
        <section class="side-bar">
            <div class="prog-div">
               <p class="pp">How many mails as been read :</p> <progress v-bind="mails" class="progress" :max="max" :value="value"></progress>
                <!-- <p class="pp">{{readPrecentage}}%</p> -->
            </div>
            <router-link class="new-mail" to="/email/newMail">New Mail</router-link>
            <router-link class="new-mail" to="/email/inbox">Inbox</router-link>
            <router-link class="new-mail" to="/email/starred">Starred</router-link>
            <router-link class="new-mail" to="/email/sentMails">sent mail</router-link>
            <router-link class="new-mail" to="/email/drafts">Drafts</router-link>

        </section>
      `,
    data() {
        return {
            mails: emailsService.getProgress(),
            // precentage: this.readPrecentage()
        };
    },
    created() {
        this.value = this.mails.value;
        this.max = this.mails.max
        eventBus.$on('progress', this.getProg)
    },
    methods: {
        getProg() {
            this.mails = emailsService.getProgress()
            this.value = this.mails.value;
            this.max = this.mails.max
            console.log(this.mails.max);
            console.log(this.mails.max);
        }
    },
    computed: {
        readPrecentage() {
            const value = this.value;
            const max = this.max;
            var pars = (value * 100) / max;
            console.log(Math.floor(pars));
            return Math.floor(pars)
        }
    }
};