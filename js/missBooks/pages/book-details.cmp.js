import longText from "../cmps/long-text.cmp.js";
import { bookService } from "../services/book.service.js";
import reviewAdd from "../cmps/review-add.cmp.js";


import userMsg from "../cmps/user-msg.cmp.js";

export default {

  template: `
  <section class="book-details" v-if="book">
  <user-msg> </user-msg>

  <h1 class="title">{{book.title}}</h1>
  <h2 class="subtitle">{{book.subtitle}}</h2>
  <h2 class="authors" v-for=" author in book.authors">{{author}}</h2>
  <h3 class="">{{book.publishedDate}} {{veteranOrNew}}</h3>
  <long-text :txt="book.description"> </long-text>
  <h3 class="">number of pages : {{book.pageCount}}, {{ pageCount}}</h3>
  <div>
    categories:
    <span v-for=" category in book.categories"> {{category}} </span>
  </div>
  <h1 :class="{red:checkExpensive, green:checkCheap,price:true}">
    cost: {{book.listPrice.amount}}
  </h1>
  <router-link v-if="nextBookId" :to="'/book/' + nextBookId">Next book</router-link>
  <router-link v-if="prevBookId" :to="'/book/' + prevBookId">prev book</router-link>

  <img :src="book.thumbnail"  >

  <h1 v-if="book.listPrice.isOnSale">sale sign</h1>
  <review-add :book="book"> </review-add>
</section>
`,


  data() {
    return {
      book: null,
      isExpensive: false,
      isCheap: false,
      nextBookId: null,
      prevBookId: null

    };
  },
  methods: {
    loadBook() {
      console.log(this.$route.params)
      const { bookId } = this.$route.params;
      bookService.getBookById(bookId)
        .then(book => {
          this.book = book;
          console.log(this.book)
          bookService.getNextBookId(this.book.id)
            .then(bookId => {
              this.nextBookId = bookId;
            })
          bookService.getPrevBookId(this.book.id)
            .then(bookId => {
              this.prevBookId = bookId
            })
        })
    }
  },
  computed: {
    pageCount() {
      if (this.book.pageCount > 500) {
        return "long reading";
      } else if (this.book.pageCount > 200) {
        return "decent reading";
      } else {
        return "light reading";
      }
    },
    veteranOrNew() {
      let currYear = new Date().getFullYear();
      if (currYear - this.book.publishedDate > 10) return "veterean book";
      else if (
        currYear - this.book.publishedDate > 1 &&
        currYear - this.book.publishedDate < 10
      )
        return " young book";
      else return "new book";
    },
    checkExpensive() {
      return this.book.listPrice.amount > 150;
    },
    checkCheap() {
      return this.book.listPrice.amount < 30;
    },
  },
  created() {
    const { bookId } = this.$route.params;
    bookService.getBookById(bookId)
      .then(book => {
        this.book = book;
      })
    this.loadBook();
  },
  watch: {
    '$route.params.bookId'(newBookId) {
      this.loadBook();
    }
  },



  components: {
    longText,
    reviewAdd,
    userMsg
  }
};
