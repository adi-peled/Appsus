import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteList from './note-list.cmp.js'

import noteFilter from './note-filter.cmp.js'
import { noteService } from '../services/note-service.js'



export default {
    name: 'note-app',
    template: `
    <section  class="note-app"    >
    <note-filter @filter="setFilter"   > </note-filter>
       <div>
           create new note :
            <button   class="btn-new-note"     @click="chooseType('noteText')">text note</button>
            <button   class="btn-new-note" @click="chooseType('noteImg')">image note</button>
            <button   class="btn-new-note" @click="chooseType('noteTodos')">list note</button>
            <button  class="btn-new-note" @click="chooseType('video')">video note</button>
      </div>
          <note-text @setVal="setNote"  @editDone="editDone"   :noteToEdit="noteToEdit" v-if="(noteType==='noteText')"> </note-text>
          <note-img     @setVal="setNote"   v-if="(noteType==='noteImg')"> </note-img>
          <note-todos  @editDone="editDone"  @setVal="setNote"  :noteToEdit="noteToEdit" v-if="(noteType==='noteTodos')"> </note-todos>
          <button @click="saveNote">save</button>
          <button  @click="close">close </button>
          <note-list :notes="notesToShow"  @editNote="onEditNote"       > </note-list>
  </section>  
    `,
    data() {
        return {
            noteToEdit: null,
            notes: [],
            noteType: '',
            filterByType: '',
            searchByTxt: '',
            currNote: null,
            newCurrNote: {}  // to do: update newcurrnote and notetype the same 
        }
    },
    methods: {
        chooseType(type) {
            this.noteType = type
            this.newCurrNote.type = type
            console.log('edit', this.noteToEdit)
        },
        saveNote() {
            if (!this.newCurrNote) return
            noteService.addNote(this.newCurrNote);
            this.newCurrNote = {}
            this.noteType = ''

        },
        setNote(info) {
            this.newCurrNote.info = info
            console.log(this.newCurrNote)

        },
        setFilter(filterByType, txt) {
            this.filterByType = filterByType;
            this.searchByTxt = txt
            console.log(filterByType, txt)
        },
        close() {
            this.noteType = null
        },
        editDone() {
            this.noteToEdit = null
        },


        onEditNote(id) {
            noteService.getNoteById(id)
                .then(note => {
                    this.noteToEdit = JSON.parse(JSON.stringify(note))
                    console.log(this.noteToEdit.type)
                    this.noteType = this.noteToEdit.type
                })

        }
    },
    computed: {
        notesToShow() {
            const filterByType = this.filterByType
            const searchBytxt = this.searchByTxt
            var pinnedNotes = this.notes.filter((note) => {
                return note.info.isPinned
            })
            var notPinedNotes = this.notes.filter((note) => {
                return !note.info.isPinned

            })
            var filterdNotes = pinnedNotes.concat(notPinedNotes)

            if (!filterByType) {
                return JSON.parse(JSON.stringify(this.notes))
            }
            filterdNotes = filterdNotes.filter((note) => {
                return note.type === filterByType
            });
            switch (filterByType) {
                case 'noteText':
                    filterdNotes = filterdNotes.filter((note) => {
                        return note.info.txt.toLowerCase().includes(searchBytxt.toLowerCase())
                    })
                    break
                case 'noteTodos':
                    filterdNotes = filterdNotes.filter((note) => {
                        return note.info.todos.some((todo) => {
                            return todo.txt.toLowerCase().includes(searchBytxt.toLowerCase())
                        })
                    })
            }
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