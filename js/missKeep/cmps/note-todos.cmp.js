import { noteService } from "../services/note-service.js"
import { Utils } from "../../main-services/utils.js"

export default {
  props: ['info', 'idx', 'noteToEdit'],
  name: 'note-todos',
  template: `
 
  <section class="note-todos">


  <ul v-if="info" class="    todos-container " :style="{backgroundColor:bgc}">

      <li v-for="(todo,idx) in  info.todos" :class="{done:info.todos[idx].isDone}" @click="done(idx)">
          {{todo.txt}}
      </li>
      <div class="btns-note">
          <div @click="updatePinned" class="pinned">
              <span v-if="info.isPinned"> <img src="./img/pinned-not.png"> </span>
              <span v-else> <img src="./img/not-pinned-not.png"> </span>
          </div>
          <button class="btn-edit" @click="editNote"> edit </button>
          <button class="btn-delete" @click="deleteNote"> delete </button>
          <div class="color-container">
              <img src="./img/color.png">
              <input class="input-color" v-model="bgc" type="color"> </input>
          </div>
      </div>
  </ul>
  <div v-else class="input-new">

      <ul v-if="noteToEdit&&onEdit">

          <li v-for=" todo in noteToEdit.info.todos">
              <input v-model="todo.txt">
          </li>
          <button @click="updateNote"> save </button>
      </ul>
      <ul  class="todo-creator"  @change="setNote" v-else>
            <div class="li-in-todo-creator">
              <li v-for="(num,idx) in listLength">
                  <input v-model="inf.todos[idx].txt" type="text" placeholder="enter text" />
              </li>
              </div>
              <button v-if="checkListLength" @click="updateLength(1,idx)"> + </button>
              <button v-if="checkListLength" @click="updateLength(-1,idx)"> - </button>
      </ul>
  </div>
</section>
    `,
  data() {
    return {
      listLength: 1,
      inf: {
        todos: [{ txt: '', isDone: '' }]
      },
      bgc: '',
      noteToEditCopy: this.noteToEdit,
      onEdit: false


    }
  },
  created() {
    if (this.noteToEditCopy) {
      this.onEdit = true
    }
  },
  methods: {
    setNote() {
      if (!this.listLength) return
      this.$emit('setVal', this.inf)
    },
    deleteNote() {
      console.log(this.idx)
      noteService.deleteNote(this.idx)
    },
    done(idx) {
      console.log(idx)
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
    },
    updatePinned() {
      console.log(this.info.isPinned)
      this.info.isPinned = !this.info.isPinned
      noteService.updatePinned(this.info)

    },
    editNote() {
      this.$emit('editNote', this.info.id)
    },
    updateNote() {
      noteService.updateNote(this.noteToEditCopy)
      this.noteToEditCopy = null
      this.$emit('editDone', this.noteToEditCopy)
      this.onEdit = false
    }
  },
  computed: {
    checkListLength() {
      return this.listLength
    }
  }
}