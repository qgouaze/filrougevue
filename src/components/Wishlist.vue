<template>
  <div>
    <h2>Wishlist</h2>
    Books!

    <ul>
      <li v-for="book in wishlist" :key="bookId">
        {{}}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
<script>
export default {
  data() {
    wishlist: {
    }
  },
  methods: {
    getWishlist() {
      if (localStorage.wishList != null) {
        wishList = JSON.parse(localStorage.wishList);
      }
    },
  },
  mounted(){
    this.getWishlist();
  }
};
</script>
