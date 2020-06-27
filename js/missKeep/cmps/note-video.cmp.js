import { noteService } from "../services/note-service.js"

export default {
    props: ['info', 'idx', 'noteToEdit'],
    name: 'note-video',
    template: `
    <section class="note-video">

    <div v-if="info" class="video-container container" :style="{backgroundColor:bgc}">
        {{info.title}}
        <div class="iframe-container">
            <iframe width="150" height="100" :src="info.url" frameborder="0" allow="accelerometer; 
        autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="btns-note">
            <div @click="updatePinned" class="pinned">
                <span v-if="info.isPinned"> <img src="./img/pinned-not.png"> </span>
                <span v-else> <img src="./img/not-pinned-not.png"> </span>
            </div>
            <button class="btn-edit" > edit </button>

            <button class="btn-delete" @click="deleteNote"> delete </button>
            <input v-model="bgc" type="color"> </input>
        </div>
    </div>
    <div v-else  class="input-new">
        <div @change="setNote()">
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
                title: "enter the title",
                bgc: ''
            },
            bgc: '',
            noteToEditCopy: this.noteToEdit,
            onEdit: false


        }
    },
    methods: {
        setNote() {
            console.log(this.data)
            this.$emit('setVal', this.data)
        },
        deleteNote() {
            noteService.deleteNote(this.idx)
        },
        updatePinned() {
            this.info.isPinned = !this.info.isPinned
            noteService.updatePinned(this.info)

        },
    },
    created() {
    },
    compnonets: {

    }
}