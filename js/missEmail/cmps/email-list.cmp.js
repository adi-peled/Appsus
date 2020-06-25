import emailPreview from './email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';
export default {
    name: 'emailList',
    template: `
        <ul  class="mails-list">
            <email-preview  class="mails" v-for="(mail,idx) in mails" :idx="idx" :mail="mail" />
        </ul>
      `,
    data() {
        return {
            mails: []
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

    },
    components: {
        emailPreview
    }
};