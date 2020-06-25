import emailPreview from '../cmps/email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';

export default {
    name: 'sentMails',
    template: `
        <section>
        <email-preview  @emailDeleted="getNewList" class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </section>
      `,
    data() {
        return {
            mails: []
        };
    },
    created() {
        this.mails = emailsService.getSentMails()
    },
    methods: {
        getNewList() {
            this.mails = emailsService.getSentMails()
            console.log(this.mails);

        }
    },
    components: {
        emailPreview
    }
};