import { noteService } from "../services/note-service.js"

export default {
  props: ['info', 'idx'],
  name: 'note-todos',
  template: `
    <section class="note-todos">
      <ul v-if="info">
        <li v-for="todo in  info.todos">
          <input type="checkbox" v-model="todo.isDone" /> {{todo.txt}} 
        </li>
  <button class="btn-delete" @click="deleteNote">  delete  </button>

      </ul>
      <ul v-else   @change="setNote">
        <li ><input type="checkbox" v-model="data.checks[0]"/> <input v-model="data.txts[0]" type="text" /></li>
        <li ><input type="checkbox" v-model="data.checks[1]"/> <input v-model="data.txts[1]" type="text" /></li>
      </ul>

    </section> 
    `,
  data() {
    return {
      data: {
        txts: [],
        checks: []
      }
    }
  },
  methods: {
    setNote() {
      this.$emit('setVal', this.data)
    },
    deleteNote() {
      noteService.deleteNote(this.idx)
    }
  },

}