import { noteService } from "../services/note-service.js"

export default {
    props: ['info', 'idx'],
    name: 'note-img',
    template: `
    <section class="note-img">

<div v-if="info">
             {{info.title}}   <img :src="info.url">  
  <button class="btn-delete" @click="deleteNote">  delete  </button>

 </div>
<div v-else @change="setNote($event)" >  
 <input type="text"   v-model="data.title"   placeholder="enter the title of the image">
  <input type="file"     accept="image/*"  > 
     </div>

    </section>    
    `,
    data() {
        return {
            data: {
                url: '',
                title: ""
            },

        }
    },
    methods: {
        setNote(e) {
            console.log(event.target.files[0])
            this.$emit('setVal', this.data, event.target.files[0])
        },
        deleteNote() {
            noteService.deleteNote(this.idx)
        }
    }
}