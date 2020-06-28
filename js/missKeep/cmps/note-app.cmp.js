import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteList from './note-list.cmp.js'
import noteVideo from './note-video.cmp.js'
import noteFilter from './note-filter.cmp.js'
import { noteService } from '../services/note-service.js'
import { Utils } from '../../main-services/utils.js'



export default {
    name: 'note-app',
    template: `
    <section  class="note-app"    >

<div  class="note-app-container ">


    <note-filter @filter="setFilter"   > </note-filter>
    <div class="create-container" >
   <span class="create-title"> create new note :  </span>
    <div  class="btns-new-note"   > 
            <div class="img-container">  <img src="./img/text.png"    @click="chooseType('noteText')">    </div>
            <div class="img-container">   <img src="./img/image.png"   @click="chooseType('noteImg')"> </div>
            <div class="img-container">   <img src="./img/list.png"    @click="chooseType('noteTodos')"> </div>
            <div class="img-container">   <img src="./img/youtube.png" @click="chooseType('noteVideo')"> </div>
      </div>
      </div>
          <note-text @setVal="setNote" @editDone="editDone" :noteToEdit="noteToEdit" v-if="(noteType==='noteText')"> </note-text>
          <note-img @setVal="setNote" :noteToEdit="noteToEdit" v-if="(noteType==='noteImg')"> </note-img>
          <note-todos  @editDone="editDone" @setVal="setNote" :noteToEdit="noteToEdit" v-if="(noteType==='noteTodos')"> </note-todos>
          <note-video  @editDone="editDone" @setVal="setNote"  v-if="(noteType==='noteVideo')"> </note-video>
<div class="btn-save-close">
          <button v-if="onNewNote" @click="saveNote">save</button>
          <button v-if="onNewNote" @click="close">close </button>
          </div>
          <note-list :notes="notesToShow" @editNote="onEditNote"> </note-list>
          </div>
  </section>  
    `,



    // <button class="btn-new-note" @click="chooseType('noteText')"><img src="./img/text.png"></button>
    // <button class="btn-new-note" @click="chooseType('noteImg')"><img src="./img/image.png"></button>
    // <button class="btn-new-note" @click="chooseType('noteTodos')"><img src="./img/list.png"></button>
    // <button class="btn-new-note" @click="chooseType('noteVideo')"> <img src="./img/youtube.png"></button>
    data() {
        return {
            noteToEdit: null,
            notes: [],
            noteType: '',
            filterByType: '',
            searchByTxt: '',
            currNote: null,
            newCurrNote: {},
            onNewNote: false
        }
    },
    methods: {
        chooseType(type) {
            this.onNewNote = true
            this.noteType = type
            this.newCurrNote.type = type
        },
        saveNote() {
            console.log(this.newCurrNote)
            if (!this.newCurrNote) return
            noteService.addNote(this.newCurrNote);
            this.newCurrNote = {}
            this.noteType = ''
        },
        setNote(info) {
            console.log(info)
            this.newCurrNote.info = info
        },
        setFilter(filterByType, txt) {
            this.filterByType = filterByType;
            this.searchByTxt = txt
        },
        close() {
            this.noteType = null
            this.onNewNote = false

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
            var notPinnedNotes = this.notes.filter((note) => {
                return !note.info.isPinned
            })
            var filterdNotes = pinnedNotes.concat(notPinnedNotes)
            if (!filterByType) {
                Utils.storeToStorage('notes', filterdNotes)
                return filterdNotes
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
        noteFilter,
        noteVideo
    },


}