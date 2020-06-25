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
        this.mails = Utils.loadFromStorage('starred')
        if (!this.mails) {
            emailsService.getStarredEmails()
                .then(res => this.mails = res)
        }

    },
    mounted() {

    },
    methods: {
        getNewList() {
            this.mails = Utils.loadFromStorage('starred')
        }

    },
    components: {
        emailPreview
    }
};