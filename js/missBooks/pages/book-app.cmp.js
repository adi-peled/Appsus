import bookList from "../cmps/book-list.cmp.js";
// import       bookPreview   from    "./book-preview.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import bookDetails from "./book-details.cmp.js";
// import       longText     from "./long-text.cmp.js";
import addBook from "../cmps/add-book.cmp.js";
import { bookService } from "../services/book.service.js";

export default {
  template: `
<section> 
      <div class="flex">


        <book-filter @filter="setFilter"></book-filter>
        <add-book> </add-book>
      </div>
      <book-list :books="booksToShow" @bookSelected="setCurrBook"></book-list>
</section>
`,
  data() {

    return {
      books: [],
      filterBy: {
        byName: "",
        fromPrice: 0,
        toPrice: Infinity,
      },
      currBook: null,
    };
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;
      var filteredbooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(filterBy.byName.toLowerCase());
      });
      filteredbooks = filteredbooks.filter((book) => {
        return (
          filterBy.fromPrice < book.listPrice.amount &&
          filterBy.toPrice > book.listPrice.amount
        );
      });
      return filteredbooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    setCurrBook(book) {
      this.currBook = book;
    },
  },
  components: {
    bookFilter,
    bookDetails,
    bookList,
    addBook,
  },
  created() {
    bookService.getBooks()
      .then(books => {
        this.books = books;
      })
  }
};