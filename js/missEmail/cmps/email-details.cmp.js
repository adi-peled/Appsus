export default {
    props: ['mail'],
    name: 'emailDetails',
    template: `
        <section :class="{read : mail.isRead}" >
            {{mail.subject}}{{mail.body}}{{mail.sentAt}}
        </section>
      `,
    data() {
        return {

        };
    },
    created() {},
    methods: {

    },
};