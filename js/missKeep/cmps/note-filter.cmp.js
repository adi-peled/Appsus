export default {
  template: `
          <section class="note-filter">
              <div  class="btns-filter" >
             <div   class="btns-filter-container" >
           <div class="filter" @click="filter('')"  > All notes     </div> 
           <div class="filter" @click="filter('noteTodos')"  >  Lists      </div> 
           <div class="filter"  @click="filter('noteText')" >  Texts      </div> 
           <div class="filter"  @click="filter('noteImg')" > Images    </div> 
              </div>
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

