export default {
    props: ['mail'],
    name: 'emailDetails',
    template: `
        <section :class="{read : mail.isRead}" >
            {{mail.subject}}{{mail.body}}{{mail.sentAt}}
            <div v-if="isClicked"></div>
        </section>
      `,
    data() {
        return {
            isClicked: false
        };
    },
    created() {},
    methods: {

    },
};