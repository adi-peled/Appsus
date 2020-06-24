
export default {
    props: ['book'],
    template: `
        <div class="book-preview">
        <h1>    name:  {{book.title}}</h1>
            <h1>   page count:   {{book.pageCount}} </h1>
           <h1>   price:   {{book.listPrice.amount}}</h1>
         <h1  :currency="currencyCode">  currency:     {{currency}}  </h1>
         <router-link   :to="'/book/' + book.id">Details</router-link> | 
</div> `
,
data(){
    return{
currency:'',
    }
},
    computed:{
        currencyCode(){
             let currCode=this.book.listPrice.currencyCode
            if(currCode==='EUR'){
                return   this.currency='€'
            }else if(currCode==='ILS'){
               return  this.currency='₪'
            }else{
               return  this.currency='$'
            }
        }
    },
    created(){
    }
};
 