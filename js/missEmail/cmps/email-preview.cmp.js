export default {
    props: ['mail'],
    name: 'emailPreviews',
    template: `
        <section  :class="{read : mail.isRead}" >
        <div class="small-mail" @click="mailClicked">
            <p>{{mail.from}}:</p><p><span>{{mail.subject}} </span> - {{text}}</p><p>Sent At : {{hour}}:{{minutes}}</p>
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
        // var month = this.mail.sentAt.getMonth()
        // var day = this.mail.sentAt.getDay()
        // var year = this.mail.sentAt.getFullYear()
        this.hour = this.mail.sentAt.getHours()
        this.minutes = this.mail.sentAt.getMinutes()
            // var seconds = this.mail.sentAt.getSeconds()


    },
    methods: {
        mailClicked() {
            this.isClicked = !this.isClicked;
            this.mail.isRead = true
        }

    }

};