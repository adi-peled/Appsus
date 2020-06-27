import { Utils } from "../../main-services/utils.js"
import { noteService } from "../services/note-service.js"
import noteEdit from './note-edit.cmp.js'
export default {
    name: 'note-text',
    props: ['info', 'idx', 'noteToEdit'],
    template: `
    <section class="note-txt">
    <div v-if="info" class="text-container" :style="{backgroundColor:bgc}">
        {{info.txt}}
        <div @click="updatePinned">
        </div>
        <div class="btns">
            <button class="btn-delete" @click="deleteNote"> delete </button>
            <button class="btn-edit" @click="editNote"> edit </button>
            <div @click="updatePinned" class="pinned">

          <span v-if="info.isPinned">      <img src="./img/pinned-not.png">     </span>
          <span v-else>    <img src="./img/not-pinned-not.png">  </span>
      </div>
            <input class="input-color" v-model="bgc" type="color"> </input>
        </div>
    </div>
    <div v-else>
        <div v-if="noteToEdit&&onEdit">
            <input type="text" v-model="noteToEditCopy.info.txt" @change="setNote"> 
            <button  @click="updateNote"  > save </button>
        </div>
        <input v-else type="text" v-model="inf.txt" @change="setNote"> 
    </div>
</section>

    `,
    data() {
        return {
            inf: {
                txt: '',
            },
            bgc: '',
            onEdit: false,
            noteToEditCopy: this.noteToEdit,

        }
    },
    methods: {
        setNote() {
            this.$emit('setVal', this.inf)
        },
        deleteNote() {
            noteService.deleteNote(this.idx)
        },
        editNote() {
            this.$emit('editNote', this.info.id)
            this.onAddNote = false
        },
        updatePinned() {
            this.info.isPinned = !this.info.isPinned
            noteService.updatePinned(this.info)
        },
        updateNote() {
            noteService.updateNote(this.noteToEditCopy)
            this.onEdit = false
            this.noteToEditCopy = null
            this.$emit('editDone', this.noteToEditCopy)
        }
    },
    created() {
        if (this.noteToEditCopy) {
            this.onEdit = true
        }

    },
    components: {
        noteEdit
    },
}