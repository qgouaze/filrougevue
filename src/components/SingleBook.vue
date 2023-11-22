
<script>
import Rating from "./Rating.vue";
export default {
  async created() {
    var bookId = this.$route.params.bookId;
    await this.getBook(bookId);
  },
  methods: {

    async getBook(bookId) {
      var url = "/src/assets/book_" + bookId + ".json";
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => (this.book = data));
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
  data() {
    return {
      bookId: Number,
      route: String,
      book: Object,
    };
  },
};
</script>


<template>
  <div class="book">
    <div class="bookHeader">
      <h2 class="bookTitle">{{ book.name }}</h2>
      <div class="headerRight">
        <span class="bookAuthor">{{ book.author }}</span>
        <button >Wishlist!</button>
      </div>
    </div>
    <div class="bookContent">
      <div class="bookPicture">
        <img class="bookCoverPic" :src="book.cover_url" alt="Cover Picture" />
      </div>
      <div class="bookDetails">
        <p class="bookDescription">{{ book.description }}</p>
      </div>
    </div>
    <div class="bookInfo">
      <span class="bookIsbn">ISBN: {{ book.isbn }} </span>
      <span class="bookPageNumber">Pages: {{ book.page_number }} </span>
      <span class="bookPublisher">Publisher: {{ book.publisher }}</span>
      <span class="bookYear">First edition: {{ book.year }}</span>
    </div>
    
  </div>
</template>
  
  <style scoped>

 .book{
  width:70%;
  margin:0 auto;
  border: 1px dotted lightgrey;
  padding: 30px;
 }
 .bookHeader{
  display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid lightgrey;
 margin-bottom: 30px;
 }
 .headerRight{
  width:30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 }
 .bookAuthor{
  text-decoration: underline;
  font-style: italic;
  font-size: smaller;

 }
 .bookContent{
  display: flex;
  justify-content: space-between;
  font-size: small;
  width:90%;
  margin:0 auto;
  padding-bottom:30px;
 }
 .bookPicture{
width: 30%;
 }
 .bookCoverPic{
  width: 200px;
  max-height:300px;
 }
 .bookDetails{
  width: 65%;
  margin-left:70px;
  
 }
 .bookInfo{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
  padding-top:20px;

 }
</style>
  