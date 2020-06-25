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
    <note-filter @filter="setFilter"> </note-filter>
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
            noteService.addNote(this.newCurrNote)
        },
        setNote(info, event) {
            this.newCurrNote.info = info
            if (!event) return
            this.info.imgObj = event
        },
        setFilter(filterByType) {
            this.filterByType = filterByType;
        },
        setCurrNote(note) {
            this.currNote = note;
        }
    },
    computed: {
        notesToShow() {
            console.log(this.notes)
            if (!this.filterByType) return this.notes
            let filterdNotes = this.notes.filter((note) => {
                console.log(note.type)
                return note.type === this.filterByType
            });
            return filterdNotes
        },
    },

    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
                console.log(this.notes)
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