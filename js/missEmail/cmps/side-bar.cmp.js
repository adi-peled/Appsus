import { emailsService } from '../services/emails-service.js'

export default {
    name: 'sideBar',
    template: `
        <section class="side-bar">
            
            <router-link class="new-mail" to="/email/newMail">New Mail</router-link>
            <router-link class="new-mail" to="/email/inbox">Inbox</router-link>
            <router-link class="new-mail" to="/email/starred">Starred</router-link>
            <router-link class="new-mail" to="/email/sentMails">sent mail</router-link>
            <progress class="progress" value="mails.value" max="mails.max"></progress>
            <router-link class="new-mail" to="/email/drafts">Drafts</router-link>

        </section>
      `,
    data() {
        return {
            mails: emailsService.getProgress()
        };
    },
    created() {


    },
    methods: {

    },
};