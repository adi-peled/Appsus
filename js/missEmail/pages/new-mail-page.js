import { emailsService } from '../services/emails-service.js'
import { eventBus } from '../../main-services/eventBus.js'
export default {
    name: 'newMail',
    template: `
        <section class="form-section">
            <form @submit.prevent="onSendMail(value)" :value="value" class="new-form">
                Name : <input type="text" placeholder="Full Name" v-model="name"/>
                eMail : <input type="email" placeholder="example@maor&adi.com" v-model="email"/>
                Subject : <input type="text" placeholder="Subject"  v-model="sub"/>
                Messege:<textarea  v-model="msg" id="w3review" name="w3review" rows="20" cols="" placeholder="Write your messege here"/>
                <div class="button-div">
                    <button  @click="value=false" type="submit">Send</button> 
                    <button @click="value=true" type="submit">Send To Drafts</button> 
                </div>
            
            </form>
        </section>
      `,
    data() {
        return {
            value: null,
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
        onSendMail(isDraft) {
            emailsService.sendNewMail(this.name, this.email, this.sub, this.msg, isDraft);
            if (isDraft) {
                eventBus.$emit('alertMsg', 'Saving to Drafts')
            } else {
                eventBus.$emit('alertMsg', 'Sent')
            }
            this.name = '';
            this.email = '';
            this.sub = '';
            this.msg = '';
        }
    },
    components: {}
};