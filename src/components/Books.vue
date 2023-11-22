<script>
import Book from "./Book.vue";
import { useBookStore } from "../stores/BookStore";

export default {
  components: {
    Book,
  },
  data() {
    return {
      books: [],
    };
  },
  computed: {},
  methods: {
    async loadBookList() {
      try {
        const response = await fetch("src/data/books.json");
        if (!response.ok) {
          throw new Error("Error: fetch failed");
        }
        const booksData = await response.json();
        useBookStore.books = [...booksData];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadBookList();
    this.books=useBookStore.books;
  },
};
</script>
<template>
  <div class="booksContainer">
    <Book
      @update="book = $event"
      :book="book"
      v-for="book in this.books"
      class="bookCard"
      :key="book.id"
    />
  </div>
</template>
<style>
.booksContainer {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
.bookCard {
  min-width: 500px;
}
</style>