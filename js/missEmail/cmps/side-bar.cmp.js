export default {
    name: 'sideBar',
    template: `
        <section class="side-bar">
            <button @click="">New Mail</button>
            <router-link to="/email/inbox">Inbox</router-link>
            <router-link to="/email/starred">Starred</router-link>

           <p>sent mail</p>
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