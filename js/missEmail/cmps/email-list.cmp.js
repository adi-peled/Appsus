import emailDetails from './email-details.cmp.js'

export default {
    name: 'emailList',
    template: `
        <ul  class="mails-list">
            <email-details  class="mails" v-for="mail in mails" :mail="mail"  />
        </ul>
      `,
    data() {
        return {
            mails: [{
                subject: 'subject',
                body: 'body',
                isRead: true,
                sentAt: new Date()
            }, {
                subject: 'subject',
                body: 'body',
                isRead: false,
                sentAt: new Date()
            }, {
                subject: 'subject',
                body: 'body',
                isRead: true,
                sentAt: new Date()
            }, {
                subject: 'subject',
                body: 'body',
                isRead: false,
                sentAt: new Date()
            }]
        }
    },
    methods: {

    },
    components: {
        emailDetails
    }
};