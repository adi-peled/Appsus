import emailPreview from '../cmps/email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';

export default {
    name: 'sentMails',
    template: `
        <section  class="list-section">
        <ul  class="mails-list">
        <email-preview  @emailDeleted="getNewList" class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </ul>
    </section>
      `,
    data() {
        return {
            mails: []
        };
    },
    created() {
        this.mails = Utils.loadFromStorage('emails')

        this.mails = this.mails.filter(mail => {
            if (mail.isSent && !mail.isDraft) {
                console.log(mail);
                return mail
            }
        })
    },
    methods: {
        getNewList() {
            this.mails = emailsService.getSentMails()
            this.mails = this.mails.filter(mail => {
                if (!mail.isDraft) {
                    console.log(mail);
                    return mail
                }
            })
        }
    },
    components: {
        emailPreview
    }
};