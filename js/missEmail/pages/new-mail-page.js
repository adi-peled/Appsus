import { emailsService } from '../services/emails-service.js'

export default {
    name: 'newMail',
    template: `
        <section class="form-section">
            <form class="new-form">
                Name : <input type="text" placeholder="Full Name" v-model="name"/>
                eMail : <input type="email" placeholder="example@maor&adi.com" v-model="email"/>
                Subject : <input type="text" placeholder="Subject"  v-model="sub"/>
                Messege:<textarea  v-model="msg" id="w3review" name="w3review" rows="20" cols="" placeholder="Write your messege here"/>
                <div class="button-div">
                    <button @click="onSendMail(name,email,sub,msg,false)" type="button">Send</button> 
                    <button @click="onSendMail(name,email,sub,msg,true)" type="button">Send To Drafts</button> 
                </div>
            
            </form>
        </section>
      `,
    data() {
        return {
            name: '',
            email: '',
            sub: '',
            msg: ''
        }
    },
    created() {

    },
    mounted() {


    },
    methods: {
        onSendMail(name, email, sub, msg, isDraft) {
            emailsService.sendNewMail(name, email, sub, msg, isDraft);
            this.name = '';
            this.email = '';
            this.sub = '';
            this.msg = '';
        }
    },
    components: {}
};