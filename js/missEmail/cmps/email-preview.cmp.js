import { emailsService } from '../services/emails-service.js'
import { Utils } from '../../main-services/utils.js';

export default {
    props: ['mail', 'idx'],
    name: 'emailPreviews',
    template: `
        <section  :class="{read : mail.isRead}" >
        <div class="small-mail" @click="mailClicked(mail.id)">
            <p>{{mail.from}}:</p><p><span>{{mail.subject}} </span> - {{text}}</p><p>Sent At : {{hour}}:{{minutes}}</p><span @click.stop="onDeleteMail(mail.id)">🗑️</span><span v-if="!mail.isSent" @click.stop="starClicked" :class="{starred : mail.isStarred}">★</span>
        </div>    
            <div v-if="isClicked">
                <h3>{{mail.subject}}</h3>
                <span>{{mail.from}} </span> <{{mail.fromMail}}> 
                <p>{{mail.body}}</p>
            </div>
        </section>
      `,
    data() {
        return {
            isClicked: false,
            text: '',
            hour: null,
            minutes: null,
        };
    },
    created() {
        if (this.mail.body.length > 30) {
            this.text = this.mail.body.substring(0, 30)
            this.text += '...'
        }
        this.hour = new Date(this.mail.sentAt).getHours()
        this.minutes = new Date(this.mail.sentAt).getMinutes()
    },
    methods: {
        mailClicked(id) {
            this.isClicked = !this.isClicked;
            this.mail.isRead = true
            emailsService.mailRead(id)

        },
        onDeleteMail(id) {
            emailsService.deleteMail(id)
            this.$emit("emailDeleted");
        },
        starClicked() {
            emailsService.newStarredList(this.mail.id)
            this.$emit("emailDeleted");
        }
    }
};