import { noteService } from "../services/note-service.js"
import noteText from './note-text.cmp.js'



export default {
    props:['info'],
    template: `
    <section class="note-edit">

    <input type="text"  placeholder="enter your text"> 

<button  @click="saveNote"> save </button>
    </section>    
    `,
    data() {
        return {

        }
    },
    methods: {
      saveNote(){

      }
        
    },
    created() {
        console.log(this.info)
    },
    components:{
        // noteText
    }
}