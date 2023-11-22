<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    checkLoggedIn() {
      if (localStorage.isLoggedIn == "true") {
        this.isLoggedIn = true;
      }
      console.log(this.isLoggedIn);
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'booklist' }">BookList</RouterLink>
        <RouterLink v-if="isLoggedIn == true" :to="{ name: 'login' }"
          >Account</RouterLink
        >
        <RouterLink v-else-if="isLoggedIn == false" :to="{ name: 'login' }"
          >Login/Register</RouterLink
        >
        <RouterLink v-if="isLoggedIn == true" :to="{ name: 'wishlist' }"
          >Wishlist!</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav,
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
</style>
