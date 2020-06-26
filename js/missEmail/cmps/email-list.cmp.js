import emailPreview from './email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';
export default {
    props: ['mails'],
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
        this.mails = Utils.loadFromStorage('email')
        if (!this.mails) {
            emailsService.getEmails()
                .then(res => this.mails = res)
        }
    },
    mounted() {

    },
    methods: {
        getNewList() {
            console.log('hi');

            this.mails = Utils.loadFromStorage('emails');

        },
        search() {
            console.log(this.searchWord);
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