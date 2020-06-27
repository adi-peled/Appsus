export default {
    template: `
          <header  class="app-header"  >
          <nav class="email-head">
              <router-link to="/note">note </router-link> |
              <router-link to="/book"> book App </router-link> | 
             <router-link to="/"  > <span  @click="goHome" >  home Page </span></router-link> | 
              <router-link to="/email/inbox"> email</router-link>    
          </nav>
          </header>
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