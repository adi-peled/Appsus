export default {
    template: `
          <nav class="app-header">
              <div>
                <router-link to="/note"><p>Note </p> </router-link> 
            
            
                <router-link to="/book"><p> Book App </p></router-link> 
            
            
                <router-link to="/"  > <span  @click="goHome" > <p> Home Page</p> </span></router-link> 
            
            
                <router-link to="/email/inbox"> <p>eMail</p></router-link>    
</div>

          </nav>
      `,
    data() {
        return {

        };
    },
    methods: {
        goHome() {
            console.log('clicked')
            this.$emit('homePage')
        }
    },
};