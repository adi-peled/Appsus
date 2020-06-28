import { emailsService } from '../services/emails-service.js'
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'eMailDetails',
    template: `
        <section class="reading" v-if="!mail.isDraft">
            <h1 class="sub" >Subject: {{mail.subject}}</h1>
            <h3 class="from-mail">Mail: {{mail.fromMail}}</h3>
            <h3 class="sent-at">Sent At: {{hour}}:{{minutes}}</h3>
            <h3 class="from-name">From: {{mail.from}}</h3>
            <h3 class="mail-body">{{mail.body}}</h3>
            <router-link to="/email/inbox"><span @click="onDeleteMail(mail.id)">🗑️</span></router-link>
            <span class="star" v-if="!mail.isSent" @click="starClicked" :class="{starred : mail.isStarred}">★</span>
        </section>
        <section v-else>
        <section class="form-section">
            <form class="new-form">
                Name : <input type="text" placeholder="Full Name" v-model="mail.from"/>
                eMail : <input type="email" placeholder="example@maor&adi.com" v-model="mail.fromMail"/>
                Subject : <input type="text" placeholder="Subject"  v-model="mail.subject"/>
                Messege:<textarea  v-model="mail.body" id="w3review" name="w3review" rows="20" cols="" placeholder="Write your messege here"/>
                <div class="button-div"> 
                    <button @click="onSendMail(mail.from,mail.fromMail,mail.subject,mail.body,false)" type="button">Send</button> 
                    <button @click="onSendMail(mail.from,mail.fromMail,mail.subject,mail.body,true)" type="button">Send To Drafts</button> 
                </div>
            
            </form>
        </section>
        </section>
      `,
    data() {
        return {};
    },
    created() {

        var { mailId } = this.$route.params
        this.mail = emailsService.getMail(mailId)
        this.hour = new Date(this.mail.sentAt).getHours()
        this.minutes = new Date(this.mail.sentAt).getMinutes()

    },
    methods: {
        onDeleteMail(id) {
            emailsService.deleteMail(id)
            eventBus.$emit('newMails')
        },
        starClicked() {
            console.log('hi');
            emailsService.newStarredList(this.mail.id)
            this.$emit("emailDeleted");
        },
        onSendMail(name, email, sub, msg, isDraft) {
            emailsService.sendNewMail(name, email, sub, msg, isDraft);
            this.name = '';
            this.email = '';
            this.sub = '';
            this.msg = '';
        }
    },
};