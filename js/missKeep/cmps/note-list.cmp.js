import { noteService } from '../services/note-service.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
export default {
    props: ['notes'],
    name: 'note-list',
    template: `
    <section   class="note-list">
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
            this.$emit('noteSelected', note)
        },
    },
    computed: {
    },

    components: {
        noteText,
        noteImg,
        noteTodos
    }
}