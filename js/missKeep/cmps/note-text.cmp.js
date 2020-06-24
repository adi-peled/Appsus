
export default {

    name: 'note-text',
    props: ['info'],
    template: `
    <section class="note-txt"    >

 <div v-if="info">{{info.txt}}  </div>
 <div v-else> 
 <input type="text" v-model="txt" @change="setNote" placeholder="enter your text"> 
  </div>
    </section>    
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        setNote() {
            console.log('yeled')
            this.$emit('setVal', this.txt)
        }
    },
    created() {
        
    }
}