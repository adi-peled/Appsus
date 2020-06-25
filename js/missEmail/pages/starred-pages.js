import emailPreview from '../cmps/email-preview.cmp.js'
import sideBar from '../cmps/side-bar.cmp.js'
import { emailsService } from '../services/emails-service.js'
export default {
    name: 'starred',
    template: `
        <ul  class="mails-list">
           
asdsadערגעגע
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
        emailPreview,
        sideBar
    }
};