export default {
  template: `
        <section class="book-filter">
            <h2>Search!</h2>
            <input type="text" placeholder="search?" v-model="filterBy.byName" @input="filter"/>
            <input type="number" min="0" placeholder="min price" v-model="filterBy.fromPrice" @input="filter"/>
            <input type="number" placeholder="max price" v-model="filterBy.toPrice" @input="filter"/>
        </section>
    `,
  data() {
    return {
      filterBy: {
        byName: "",
        fromPrice:'',
        toPrice:Infinity  
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.filterBy);
    },
  },
};


