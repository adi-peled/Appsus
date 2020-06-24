import { bookService } from "../services/book.service.js";



export default {
  template: `
  <div   class="add-book">
search book to add it
  <input @input="search" v-model="bookName"  type="text">
  <li v-for="book in books"     > 
  {{book.volumeInfo.title}}  <button @click="addBook(book)"> + </button> 
   </li>

  </div>
      `,
  data() {
    return {
      titleBooks: '',
      bookName: '',
      books: null,
    }
  },
  created() {
  },
  methods: {
    search() {
      if (!this.bookName) return
      bookService.getNewBooksFromAPI(this.bookName).then(books => {
        this.books = books
      })
    },
    addBook(book) {
      let newFormatBook = bookService.changeFormatBook(book)
      bookService.addBook(newFormatBook)
    }
  },
};
