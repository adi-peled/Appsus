import { noteService } from "../services/note-service.js"




export default {
    props:['info'],
    template: `
    <section class="note-edit">

    </section>    
    `,
    data() {
        return {

        }
    },
    methods: {
        loadNote() {
            console.log(this.$route.params,'hftfhy')
            const { noteId } = this.$route.params
            // noteService.getNoteById(noteId)
            {
                //     const { bookId } = this.$route.params;
                //     bookService.getBookById(bookId)
                //       .then(book => {
                //         this.book = book;
                //         console.log(this.book)
                //         bookService.getNextBookId(this.book.id)
                //           .then(bookId => {
                //             this.nextBookId = bookId;
                //           })
                //         bookService.getPrevBookId(this.book.id)
                //           .then(bookId => {
                //             this.prevBookId = bookId
                //           })
                //       })
                //   }
            }
        },
        created() {
            console.log(this.info)
        }
    }

}