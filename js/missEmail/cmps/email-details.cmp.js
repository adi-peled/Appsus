import { emailsService } from '../services/emails-service.js'

export default {
    name: 'eMailDetails',
    template: `
        <section>
            <h1>{{mail.subject}}</h1>
            <h3>{{mail.fromMail}}</h3>
            <h3>{{hour}}:{{minutes}}</h3>
            <h3>{{mail.from}}</h3>
            <h3>{{mail.body}}</h3>
            <router-link to="/email/inbox"><span @click.stop="onDeleteMail(mail.id)">🗑️</span></router-link>


        </section>
      `,
    data() {
        return {};
    },
    created() {
        var { mailId } = this.$route.params
        console.log(mailId)
        this.mail = emailsService.getMail(mailId)
        this.hour = new Date(this.mail.sentAt).getHours()
        this.minutes = new Date(this.mail.sentAt).getMinutes()

    },
    methods: {
        onDeleteMail(id) {
            emailsService.deleteMail(id)
            this.$emit("emailDeleted");
        }
    },
};