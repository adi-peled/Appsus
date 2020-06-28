import { eventBus } from '../../main-services/eventBus.js'
export default {
    template: `
    <section class="home-page">
            <p class="apsus">APPSUS</p>
           <p class="home-page-sentence"> Tough times never last but tough people do.</p>
            <div class="home-page-routes">
               <router-link to="/note"><img class="img1"  @click="updateIsHomePage" title="Note App" src="img/note.png"><p>Note</p></router-link>  
               <router-link to="/book"><img class="img2"  @click="updateIsHomePage"title="Book App" src="img/book.png"><p>Book</p> </router-link>  
               <router-link to="/email/inbox"><img class="img3"  @click="updateIsHomePage"title="Email App" src="img/email.png"><p>Email</p></router-link>  
            </div>
    </section>    
    
    `,
    methods: {
        updateIsHomePage() {
            eventBus.$emit('updateHomePage')
        }
    }
}