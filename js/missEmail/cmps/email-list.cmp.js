import emailPreview from './email-preview.cmp.js'
import { emailsService } from '../services/emails-service.js'
export default {
    name: 'emailList',
    template: `
        <ul  class="mails-list">
            <email-preview  class="mails" v-for="mail in mails" :mail="mail" />
        </ul>
      `,
    data() {
        return {
            mails: []
        }
    },
    created() {

        emailsService.getEmails()
            .then(res => this.mails = res)
    },
    mounted() {

    },
    methods: {

    },
    components: {
        emailPreview
    }
};