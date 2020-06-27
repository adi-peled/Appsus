export default {
  template: `
          <section class="note-filter">
              <h2  class="title-filter">    notes type   </h2>
              <div  class="btns-filter" >
              <button class="btn-filter" @click="filter('')"  > all lists   </button> 
              <button class="btn-filter" @click="filter('noteTodos')"  > only lists   </button> 
              <button class="btn-filter"  @click="filter('noteText')" > only text   </button> 
              <button class="btn-filter"  @click="filter('noteImg')" > only images   </button> 
              </div>


              <div class="search" >  
              search: <input v-model="searchBytxt"  v-if="filterType"   @input="filter"  type="text">
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

