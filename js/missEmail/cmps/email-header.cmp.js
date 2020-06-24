export default {
    name: 'eMailHeader',
    template: `
        <section>
            <header class="main-header">
                {{eMailLogo}}
                <input placeholder="Search for eMail" type="text"/>
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