import { emailsService } from '../services/emails-service.js'
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'sideBar',
    template: `
        <section class="side-bar">
            
            <router-link class="new-mail" to="/email/newMail">New Mail</router-link>
            <router-link class="new-mail" to="/email/inbox">Inbox</router-link>
            <router-link class="new-mail" to="/email/starred">Starred</router-link>
            <router-link class="new-mail" to="/email/sentMails">sent mail</router-link>
            <progress v-bind="mails" class="progress" v-bind:max="max" v-bind:value="value"></progress>
            <router-link class="new-mail" to="/email/drafts">Drafts</router-link>

        </section>
      `,
    data() {
        return {
            mails: emailsService.getProgress()
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
            console.log(this.mails.value);
        }
    },
};