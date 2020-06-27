import { noteService } from "../services/note-service.js"

export default {
    props: ['info', 'idx'],
    name: 'note-img',
    template: `
    <section class="note-img">

<div     class="img-container"   v-if="info"  :style="{backgroundColor:bgc}"  >
             {{info.title}}   <img :src="info.url">  
             <div   @click="updatePinned"   class="pinned"  >
             <span    v-if="info.isPinned">   📌   </span>
             <span      v-else>  notPinned </span>
                      </div>
  <button class="btn-delete" @click="deleteNote">  delete  </button>
  <input  v-model="bgc"  type="color">   </input>

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
            bgc:''
            

        }
    },
    methods: {
        setNote(e) {
            console.log(event.target.files[0])
            this.$emit('setVal', this.data, event.target.files[0])
        },
        deleteNote() {
            noteService.deleteNote(this.idx)
        },
        updatePinned(){
            this.info.isPinned=!this.info.isPinned
          }

    },
    created(){
    }
}