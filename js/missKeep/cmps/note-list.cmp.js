import { noteService } from '../services/note-service.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteEdit from './note-edit.cmp.js'

//KEY WILL MAKE BUGS DONT ASK ORI LATER WHEN THEY APPEAR
export default {
    props: ['notes'],
    name: 'note-list',
    template: `
    <section   class="note-list"  >
        <component @editNote="editNote" class="note-card" 
                :is="note.type" v-for="(note,idx) in notes"   
                :idx="idx"  :info="note.info"> 
        </component>
        
</section>    
    `,
    data() {
        return {

        }
    },
    methods: {
        editNote(id) {
            this.$emit('editNote', id)
        }

    },
    computed: {
    },
    mounted() {
        
        console.log(this.notes)
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteEdit

    }
}