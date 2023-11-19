<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="content">
    <Sidebar />
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.content {
  display: flex;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  border-bottom: 1px solid lightgrey;
  margin-top: 40px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: grey;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
main {
  width: 100%;
}
</style>
