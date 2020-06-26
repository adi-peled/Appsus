export default {
    name: 'eMailHeader',
    template: `
        <section>
            <header class="main-header">
                {{eMailLogo}}
                apps
            </header>
        </section>
      `,
    data() {
        return {
            eMailLogo: 'theGoodMail'
        };
    },
    methods: {

    },
};