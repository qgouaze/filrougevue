<script>
import Book from './Book.vue'
export default {
  components: {
    Book
  },
  data() {
    return {
      books: [
        {
          name: "The Lord of the Rings : The Fellowship of the Ring",
          page_number: 423,
          id: 1,
          isbn: "978-0547928210",
          description: "Where little, mushroom-eating, weed-smoking hobbits manage, while probably high as fuck, to deal with problems the armies of man couldn't do shit about. A literal brick of excessive details, fantasy and adventure, sprinkled with old-timer misogyny. Nice maps and artworks in some editions tho.",
          author: "J.R.R. Tolkien",
          rating: 5,
          cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        },
        {
          name: "Sunvault : Stories of Solarpunk and Eco-Speculation",
          page_number: 254,
          id: 5,
          isbn: "978-1937794750",
          description: "Anthology of Solarpunk short fictions, because if we can't live in a nice timeline, we can sure read about them. When you're done, go browse the web for linked concepts and ideas, and become a guerilla gardener, or just punch nazis. You should probably learn sabotage, electronics, how to cook vegan meals, and punch people in the face.",
          author: "Various",
          rating: 5,
          cover_url: "https://m.media-amazon.com/images/I/81VuJ1k2x3L._SL1360_.jpg",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        },
        {
          name: "Demain les chats",
          page_number: 320,
          id: 2,
          isbn: " 978-2226392053 ",
          description: "I have no idea what could be happening in this one, buf if cats rule the world, I mean, fair. Not like humans could do the job right, and they had some time to try, you know? And another author already tried something with rats a while back so this one literaly couldn't be avoided.",
          author: "Bernard Werber",
          rating: 3,
          cover_url: "https://m.media-amazon.com/images/I/81rN8Z-qMlL._SL1500_.jpg",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        },
        {
          name: "Book",
          page_number: 150,
          id: 3,
          isbn: 150816202,
          description: "Lorem Ipseum Dolor Sit Amet",
          author: "Richard",
          rating: 4,
          cover_url: "",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        },
        {
          name: "Books",
          page_number: 800,
          id: 4,
          isbn: 10189201,
          description: "Lorem Ipseum Dolor Sit Amet",
          author: "Ravi",
          rating: 5,
          cover_url: "",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        },
        {
          name: "Books",
          page_number: 800,
          id: 6,
          isbn: 10189201,
          description: "Lorem Ipseum Dolor Sit Amet",
          author: "Ra",
          rating: 5,
          cover_url: "",
          publisher:"", 
          year: "",
          genre: "",
          category:"",
        }],
      text: "Plop"
    }
  },
  computed: {
  },

}
</script>
<template>
  <div class="booksContainer">
    <Book @update="book = $event" :book="book" v-for="book in this.books" class="bookCard" :key="book.id" />
  </div>
</template>
<style>
.booksContainer {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
.bookCard{
  min-width: 500px;
}

</style>