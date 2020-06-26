import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteList from './note-list.cmp.js'

import noteFilter from './note-filter.cmp.js'
import { noteService } from '../services/note-service.js'



export default {
    name: 'note-app',
    template: `
    <section  class="note-app"  >
    <note-filter @filter="setFilter"    > </note-filter>
       <div>
           create new note :
            <button   class="btn-new-note"     @click="chooseType('noteText')">text note</button>
            <button   class="btn-new-note" @click="chooseType('noteImg')">image note</button>
            <button   class="btn-new-note" @click="chooseType('noteTodos')">list note</button>
            <button  class="btn-new-note" @click="chooseType('video')">video note</button>
      </div>
          <note-text @setVal="setNote" v-if="(newCurrNote.type==='noteText')"> </note-text>
          <note-img    @setVal="setNote"   v-if="(noteType==='noteImg')"> </note-img>
          <note-todos     @setVal="setNote" v-if="(noteType==='noteTodos')"> </note-todos>
          <button @click="saveNote">save</button>
          <note-list :notes="notesToShow"  @noteSelected="setCurrNote"     > </note-list>
  </section>  
    `,
    data() {
        return {
            notes: [],
            noteType: '',
            filterByType: '',
            searchByTxt: '',
            currNote: null,
            newCurrNote: {}
        }
    },
    methods: {
        chooseType(type) {
            this.noteType = type
            this.newCurrNote.type = type
        },
        saveNote() {
            if (!this.newCurrNote) return

            noteService.addNote(this.newCurrNote);
            this.newCurrNote = {}
            this.noteType = ''
        },
        setNote(info, event) {
            this.newCurrNote.info = info
            if (!event) return
            this.info.imgObj = event
        },
        setFilter(filterByType, txt) {
            this.filterByType = filterByType;
            this.searchByTxt = txt
        },
        setCurrNote(note) {
            this.currNote = note;
        }


        // booksToShow() {
        //   const filterBy = this.filterBy;
        //   if (!filterBy) return this.books;
        //   var filteredbooks = this.books.filter((book) => {
        //     return book.title.toLowerCase().includes(filterBy.byName.toLowerCase());
        //   });
        //   filteredbooks = filteredbooks.filter((book) => {
        //     return (
        //       filterBy.fromPrice < book.listPrice.amount &&
        //       filterBy.toPrice > book.listPrice.amount
        //     );
        //   });
        //   return filteredbooks;
        // }
    },
    computed: {
        notesToShow() {
            if (!this.filterByType) {
                return JSON.parse(JSON.stringify(this.notes))
            }
            var filterdNotes = this.notes.filter((note) => {
                // console.log(note)
                return note.type === this.filterByType

            });
            // if (this.filterByType === "noteText")
            // filterdNotes = filterdNotes.filter((note) => {
            //     console.log(note.info.txt, 'ggg')
            //     console.log(this.searchByTxt)

            //     return note.info.txt.toLowerCase().includes(this.searchByTxt.toLowerCase())

            // })
            return filterdNotes
        },
    },

    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            })

    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteList,
        noteFilter
    },


}