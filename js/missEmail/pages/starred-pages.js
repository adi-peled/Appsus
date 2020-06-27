import emailPreview from '../cmps/email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';

export default {
    name: 'starred',
    template: `
        <ul  class="mails-list">
            <email-preview @emailDeleted="getNewList" class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </ul>
      `,
    data() {
        return {
            mails: []
        }
    },
    created() {
        this.mails = Utils.loadFromStorage('emails')
        if (!this.mails) {
            emailsService.getStarredEmails()
                .then(res => this.mails = res)
        }
        this.mails = this.mails.filter(mail => {
            if (mail.isStarred) {
                return mail
            }
        })

    },
    mounted() {

    },
    methods: {
        getNewList() {
            this.mails = Utils.loadFromStorage('emails')
            if (!this.mails) {
                emailsService.getStarredEmails()
                    .then(res => this.mails = res)
            }
            this.mails = this.mails.filter(mail => {
                if (mail.isStarred) {
                    return mail
                }
            })
        }

    },
    components: {
        emailPreview
    }
};