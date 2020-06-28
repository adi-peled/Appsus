import emailPreview from './email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'emailList',
    template: `
    <section class="list-section">
        <input  @input="search" v-model="searchWord" class="mail-search" placeholder="Search for eMail" type="text"/>
        <ul  class="mails-list">
            <email-preview @emailDeleted="getNewList" class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </ul>
    </section>
      `,
    data() {
        return {
            mails: [],
            searchWord: ''
        }
    },
    created() {
        eventBus.$on('newMails', this.getNewList)
        emailsService.getEmails()
            .then(res => Utils.storeToStorage('emails', res))

        this.mails = Utils.loadFromStorage('emails')
        if (!this.mails || !this.mails.length)
            emailsService.getEmails()
            .then(res => this.mails = res)
        this.mails = this.mails.filter(mail => {
            if (!mail.isDraft && !mail.isSent) {
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
                if (!mail.isDraft || !mail.isSent) {
                    return mail
                }
            })
        },
        search() {
            if (this.searchWord === '') {
                this.mails = Utils.loadFromStorage('emails');
            } else {
                var emails = Utils.loadFromStorage('emails');
                this.mails = emails.filter(email => {
                    if (email.subject.includes(this.searchWord)) {
                        return email
                    }
                })
            }
        }
    },
    components: {
        emailPreview
    }
};