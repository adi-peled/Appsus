import emailPreview from '../cmps/email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'emailList',
    template: `
    <section class="list-section">
        <ul  class="mails-list">
            <email-preview @emailDeleted="getNewList" class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </ul>
    </section>
      `,
    data() {
        return {
            mails: []
        }
    },
    created() {
        this.mails = Utils.loadFromStorage('emails')
        if (!this.mails) {
            emailsService.getEmails()
                .then(res => this.mails = res)
        }

        this.mails = this.mails.filter(mail => {
            if (mail.isDraft) {
                console.log(mail);

                return mail
            }
        })

    },
    mounted() {

    },
    methods: {
        getNewList() {
            this.mails = Utils.loadFromStorage('emails')
            if (!this.mails || !this.mails.length)
                emailsService.getEmails()
                .then(res => this.mails = res)
            this.mails = this.mails.filter(mail => {
                if (mail.isDraft) {
                    console.log(mail);

                    return mail
                }
            })
            console.log('getNewList In list', this.mails);
        },
        search() {

        }
    },
    components: {
        emailPreview
    }
};