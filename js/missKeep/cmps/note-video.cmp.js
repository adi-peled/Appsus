import { noteService } from "../services/note-service.js"

export default {
    props: ['info', 'idx', 'noteToEdit'],
    name: 'note-video',
    template: `
    <section class="note-video">

<div v-if="info" class="video-container" :style="{backgroundColor:bgc}">
{{info.title}}   {{info.url}}



</div>
<div v-else>

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
    },
    created() {
    },
    compnonets: {

    }
}