export default {
  template: `
          <section class="note-filter">
              <h2>types list</h2>
              <button  @click="filter('noteTodos')"  > only lists   </button> 
              <button   @click="filter('noteText')" > only text   </button> 
              <button   @click="filter('noteImg')" > only images   </button> 
           
          </section>
      `,
  data() {
    return {
      filterByType: ''
    };
  },
  methods: {
    filter(type) {
      this.$emit("filter", type)
    }
  },
};

