import { noteService } from '../services/note-service.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
export default {
props:['notes'],
    name: 'note-list',
    template: `
    <section    class="note-storage">
<component class="note-card" :is="note.type" v-for="note in notes"  :info="note.info">  </component>
    </section>    
    `,
    data() {
        return {
        
        }
    },
    methods: {
       
    },
    created() {
        console.log('created',this.notes)
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    }
}