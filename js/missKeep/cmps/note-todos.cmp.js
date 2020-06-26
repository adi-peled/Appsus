import { noteService } from "../services/note-service.js"
import { Utils } from "../../main-services/utils.js"

export default {
  props: ['info', 'idx'],
  name: 'note-todos',
  template: `
    <section class="note-todos">

      <ul  v-if="info"  class="todos-container"  :style="{backgroundColor:bgc}" >
     
        <li v-for="(todo,idx) in  info.todos"   :class="{done:info.todos[idx].isDone}"      @click="done(idx)"   >
             {{todo.txt}}  {{info.todos[idx].isDone}}
        </li>
  <button class="btn-delete" @click="deleteNote">  delete  </button>
  <input  v-model="bgc"  type="color">   {{bgc}} </input>
      </ul>

      <ul v-else     @change="setNote">
        <li v-for="(num,idx) in listLength" >
               <input   v-model="inf.todos[idx].txt" type="text" />
        </li>
        <button v-if="checkListLength"   @click="updateLength(1,idx)"> + </button>
        <button   v-if="checkListLength" @click="updateLength(-1,idx)"> - </button>

      </ul>
      
    </section> 
    `,
  data() {
    return {
      listLength: 1,
      inf: {
        todos: [{ txt: '', isDone: '' }]
      },
      bgc: '',


    }
  },
  created() {
  },
  methods: {
    setNote() {
      if (!this.listLength) return
      this.$emit('setVal', this.inf)
    },
    deleteNote() {
      noteService.deleteNote(this.idx)
    },
    done(idx) {
      console.log(this.info.todos[idx].isDone)
        this.info.todos[idx].isDone = !this.info.todos[idx].isDone
    },
    updateLength(diff) {
      if (diff === 1) {
        this.inf.todos.push({ txt: '', isDone: '' })
        return this.listLength += diff
      }
      if (diff === -1) {
        this.inf.todos.splice(this.listLength, 1)
        return this.listLength += diff
      }
    }
  },
  computed: {
    checkListLength() {
      return this.listLength
    }
  }

}