export default {
    template: `
          <header  class="app-header"  >
          <nav class="email-head">
              <router-link to="/note">note </router-link> |
              <router-link to="/book"> book App </router-link> | 
              <router-link to="/"> home Page </router-link> | 
              <router-link to="/email/inbox"> email</router-link>    
          </nav>
          </header>
      `,
    data() {
        return {

        };
    },
    methods: {

    },
};