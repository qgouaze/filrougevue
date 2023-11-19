<script>
import Rating from './Rating.vue';

export default {
  components: {
    Rating
  },
  props: {
    book: {
      name: String,
      id: Number,
      isbn: String,
      description: String,
      author: String,
      rating: Number,
      page_number: Number,
      cover_url: String

    }
  },
  methods: {
    updateRating(new_rating) {
      this.newBook = this.book;
      this.newBook.rating = new_rating;
    }
    ,
    addToWishList(book){
      console.log("Book wishlist click");
      if (JSON.parse(localStorage.wishList).includes(JSON.stringify(book))){
        localStorage.wishList+=JSON.stringify(book);
        alert("Book added to wishList");
      }
    }
  },
  data() {
    return {
      newBook: {},
    }
  },
};
</script>

<template>
  <div class="bookCard">
    <div class="bookCardHeader">
      <router-link :to="{ name: 'book', params: { bookId: book.id } }">{{ book.name }}</router-link>>
      <span class="bookAuthor">{{ book.author }}</span>
    </div>
    <div class="bookCardContent">
      <div class="bookPicture">
        <img class="bookCoverPic" :src=book.cover_url alt="Cover Picture">
      </div>
      <div class="bookDetails">
        <p class="bookDescription">{{ book.description }}</p>


      </div>

    </div>
    <div class="bookInfo">
      <span class="bookIsbn">ISBN: {{ book.isbn }} </span>
      <span class="bookPageNumber">Pages: {{ book.page_number }} </span>
      <span class="bookRating">
        <Rating @update="updateRating" color-plain-stars="green" :rating="book.rating" :max-of-stars="5"></Rating>
      </span>
      <button @click="addToWishlist(book)">Wishlist!</button>
    </div>
  </div>
</template>

<style>
.bookCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px dotted lightgrey;
  color: grey;
  width: 45%;
  margin-top: 20px;
  height: 100%;
  padding: 5px;
}

.bookCardContent {
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 250px;
  font-size: small;
}

.bookPicture,
.bookDetails {
  width: 45%;
}

.bookInfo {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: end;
  font-size: x-small;
  justify-content: space-around;
}

.bookAuthor {
  font-size: x-small;
  font-style: italic;
}

.bookTitle {
  border-bottom: 1px solid lightgray;
  font-size: small;
  font-weight: 600;
}

.bookCardHeader {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  height: 100%;
}

.bookCoverPic {
  width: 150px;
  max-height: 225px;
  margin-top: 10px;
  margin-left: 15px;
}

.bookDescription {
  margin-top: 10px;
  font-size: smaller;
}
</style>
