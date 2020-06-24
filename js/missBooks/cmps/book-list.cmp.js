import      bookPreview from     "./book-preview.cmp.js";

export default {
  props: ["books"],
  template: `
<div class="book-list">
<book-preview v-for="book in books"  @click.native="selectBook(book)"    :book="book" :key="book.id"/>
</div>
    `,
  methods: {
    selectBook(book) {
      this.$emit("bookSelected", book);
    },
  },
  components:{
   bookPreview
  }
};
