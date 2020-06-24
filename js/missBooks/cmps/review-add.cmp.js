import { bookService } from "../services/book.service.js";
import {eventBus} from '../services/event-bus.service.js';

export default {
    props: ['book'],
    template: ` <section>
          <form  class="review-add"  >
       <h1>   Full Name: <input type="text" v-model="review.name"   ref="name" value="Books Reader"> </h1>
          <h1>  Rate: <select   id="rate"    v-model="review.rate"   >
          <option value="1">🌟</option>
          <option value="2">🌟🌟</option>
          <option value="3">🌟🌟🌟</option>
          <option value="4">🌟🌟🌟🌟</option>
          <option value="5">🌟🌟🌟🌟🌟</option>
          </select>
         </h1>
             <h1>read date:  <input type='date'    v-model="review.date" > </h1>
                 <textarea   v-model="review.txt"    cols="30" rows="10"></textarea>
       <button  @click="addReview"    >sumbit</button>
          </form>
          <div > 
          list of reviews:
            <div  v-for="review in book.reviews"> 
            <h1> Name:   {{review.name}}    </h1>
            <h1>   Rate: {{review.rate}}    </h1>
            <h1>   Date: {{review.date}}    </h1>
            <h1>   description: {{review.txt}}    </h1>   
             <br>
            </div>  
          </div>
          </section>
      `,
    data() {
        return {

            review: {
                name: '',
                rate: '',
                date: new Date().toISOString().slice(0, 10),
                txt: '',
            }
        };
    },
    methods: {
        addReview() {
            const { bookId } = this.$route.params;
            console.log(this.review)
            bookService.addReview(bookId, this.review)
            this.review = {
                name: '',
                rate: '',
                date: new Date().toISOString().slice(0, 10),
                txt: '',
            }
            eventBus.$emit('user-msg', `review was added successfully`);
        },


    },
    computed: {

    },
    created() {
        console.log(this.book)
    },
    mounted() {
        this.$refs.name.focus()
    }


};
