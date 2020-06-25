import { noteService } from '../services/note-service.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
export default {
    props: ['notes'],
    name: 'note-list',
    template: `
    <section @click="console"   class="note-list">
<component class="note-card" 
        :is="note.type" v-for="(note,idx) in notes "  :key="note.info.id"  
        :idx="idx"  :info="note.info"> 
</component>
</section>    
    `,
    data() {
        return {

        }
    },
    methods: {
        selectNote(note) {
            console.log(note)
            this.$emit('noteSelected', note)
        },
        console() {
            console.log(this.notes)

        }

    },
    computed: {
    },

    components: {
        noteText,
        noteImg,
        noteTodos
    }
}