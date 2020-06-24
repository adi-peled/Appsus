export default {
  props: ["txt"],
  template: `
  <div     >
  {{shortedTxt}}
  <button v-if="isLong&&!isRead"  @click="readMore" >  read more  </button> 
  </div>
      `,
  data() {
    return {
      shortedTxt: this.txt.substring(0, 100),
      isRead: false,
    };
  },
  methods: {
    readMore() {
      console.log(this.txt);
      const restTxt = this.txt.substring(100, this.txt.length);
      this.shortedTxt = this.shortedTxt + restTxt;
      this.isRead = true;
    },
  },
  computed: {
    isLong() {
      return this.txt.length > 100;
    },
  },
  created() {},
};
