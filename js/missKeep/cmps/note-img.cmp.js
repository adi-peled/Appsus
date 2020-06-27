import { noteService } from "../services/note-service.js"

export default {
    props: ['info', 'idx', 'noteToEdit'],
    name: 'note-img',
    template: `
    <section class="note-img ">
    <div class="img-container container" v-if="info" :style="{backgroundColor:bgc}">
        {{info.title}} <img :src="info.url">
        <div class="btns-note">
            <div @click="updatePinned" class="pinned">
                <span v-if="info.isPinned"> <img src="./img/pinned-not.png"> </span>
                <span v-else> <img src="./img/not-pinned-not.png"> </span>
            </div>
            <button class="btn-edit" @click="editNote"> edit </button>
            <button class="btn-delete" @click="deleteNote"> delete </button>
            <input v-model="bgc" type="color"> </input>
        </div>
    </div>
    <div v-else>
        <div v-if="noteToEdit&&onEdit">
            <input type="text" v-model="noteToEdit.info.title">
            <input type="text" v-model="noteToEdit.info.url">
            <button @click="updateNote"> save </button>
        </div>

        <div v-else @change="setNote()">
            <input type="text" v-model="data.title">
            <input type="text" v-model="data.url">
        </div>

    </div>

</section>
    `,
    data() {
        return {
            data: {
                url: 'enter url',
                title: "enter the title"
            },
            bgc: '',
            noteToEditCopy: this.noteToEdit,
            onEdit: false


        }
    },
    methods: {
        setNote() {
            this.$emit('setVal', this.data)
        },
        deleteNote() {
            noteService.deleteNote(this.idx)
        },
        updatePinned() {
            this.info.isPinned = !this.info.isPinned
            noteService.updatePinned(this.info)

        },
        editNote() {
            this.$emit('editNote', this.info.id)
        },
        updateNote() {
            noteService.updateNote(this.noteToEditCopy)
            this.noteToEditCopy = null
            this.$emit('editDone', this.noteToEditCopy)
            this.onEdit = false
        }

    },
    created() {
        if (this.noteToEditCopy) {
            this.onEdit = true
        }
    }
}