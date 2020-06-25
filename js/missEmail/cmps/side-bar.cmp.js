export default {
    name: 'sideBar',
    template: `
        <section class="side-bar">
            
            <router-link class="new-mail" to="/email/newMail">New Mail</router-link>
            <router-link to="/email/inbox">Inbox</router-link>
            <router-link to="/email/starred">Starred</router-link>
            <router-link to="/email/sentMails">sent mail</router-link>

           <p>drafts</p>
        </section>
      `,
    data() {
        return {

        };
    },
    methods: {

    },
};