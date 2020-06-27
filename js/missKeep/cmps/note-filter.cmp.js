export default {
  template: `
          <section class="note-filter">
              <div  class="btns-filter" >
              <button class="btn-filter" @click="filter('')"  > all list   </button> 
              <button class="btn-filter" @click="filter('noteTodos')"  > only lists   </button> 
              <button class="btn-filter"  @click="filter('noteText')" > only text   </button> 
              <button class="btn-filter"  @click="filter('noteImg')" > only images   </button> 
              </div>
              <div class="search"    v-if="filterType" >  
              search: <input v-model="searchBytxt"   placeholder="enter text"  @input="filter"  type="text">
              </div>
          </section>
      `,
  data() {
    return {
      searchBytxt: '',
      filterType: ''
    };
  },
  methods: {
    filter(type) {
      if (typeof type === "string") {
        this.$emit("filter", type, this.searchBytxt)
        this.filterType = type
      }
      else this.$emit("filter", this.filterType, this.searchBytxt)
    },

  },
};

