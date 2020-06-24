import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteList from './note-list.cmp.js'

import noteFilter from './note-filter.cmp.js'
import { noteService } from '../services/note-service.js'



export default {
    name: 'note-app',
    template: `
    <section>
    <note-filter @filter="setFilter"  @focus="print"   > </note-filter>
       <div>
            choose type of note:
            <button @click="chooseType('text')">text note</button>
            <button @click="chooseType('img')">image note</button>
            <button @click="chooseType('list')">list note</button>
            <button @click="chooseType('video')">video note</button>
      </div>
          <note-text @setVal="setNote" v-if="(noteType==='text')"> </note-text>
          <note-img    @setVal="setNote"   v-if="(noteType==='img')"> </note-img>
          <note-todos     @setVal="setNote" v-if="(noteType==='list')"> </note-todos>
          <button @click="saveNote">save</button>
          <note-list :notes="notesToShow"> </note-list>
  </section>  
    `,
    data() {
        return {
            notes: [],
            noteType: '',
            filterByType: ''


        }
    },
    methods: {
        chooseType(type) {
            this.noteType = type
        },
        saveNote() {
            noteService.addNote(this.info, this.noteType)
        },
        setNote(info,event) {
            this.info = info
            if(!event) return
            this.info.imgObj=event
        },
        setFilter(filterByType) {
            this.filterByType = filterByType;
        },
        print() {
            console.log('focus')
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterByType) return this.notes
            let filterdNotes = this.notes.filter((note) => {
                console.log(note.type)
                return note.type === this.filterByType
            });
            return filterdNotes
        },
    },
    created() {
        this.notes = noteService.getNotes()
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteList,
        noteFilter
    },


}