import { Utils } from "../../main-services/utils.js"
import { noteService } from "../services/note-service.js"
import noteEdit from './note-edit.cmp.js'
export default {

    name: 'note-text',
    props: ['info', 'idx'],
    template: `
    <section class="note-txt"    >
        <div v-if="info">
            {{info.txt}}
            <button class="btn-delete" @click="deleteNote">  delete  </button>
            <button class="btn-edit" @click="editNote">  edit  </button>
            <note-edit  v-if="isEdit"   :info="info">     </note-edit>
            
        </div>
        <div v-else> 
            <input type="text" v-model="inf.txt" @change="setNote" placeholder="enter your text"> 
        </div>

    </section>    
    `,
    data() {
        return {
            inf:{
                txt: '',
            },
            isEdit: false
        }
    },
    methods: {
        setNote() {
            console.log('yeled')
            this.$emit('setVal', this.inf)
         },
        deleteNote() {
            noteService.deleteNote(this.idx)
        },
        editNote() {
            this.isEdit = true
        }

    },
    created() {
    },
    components: {
        noteEdit
    }
}