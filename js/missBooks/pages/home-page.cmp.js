export default {
    template: `
    <section class="home-page">
            <p class="apsus">APSUS</p>
           <p class="home-page-sentence"> Tough times never last but tough people do.</p>
            <div class="home-page-routes">
               <router-link to="/note"><img title="Note App" src="/img/note.png"></router-link>  
               <router-link to="/book"><img title="Book App" src="/img/book.png"> </router-link>  
               <router-link to="/email/inbox"><img title="Email App" src="/img/email.png"></router-link>  
               

            </div>
    </section>    
    
    `,
    methods: {}
}


{
    /* <img src="/img/note.png">
    <img src="/img/email.png">
    <img src="/img/book.png"> */
}

/* <router-link to="/note">note </router-link> |
<router-link to="/book"> book App </router-link> | 
<router-link to="/email/inbox"> email</router-link>   */