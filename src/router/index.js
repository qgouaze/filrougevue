import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      alias: "/home",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/booklist",
      name: "booklist",
      component: () => import("../views/BookListView.vue"),
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("../views/WishlistView.vue"),
    },
    {
      path: "/book/:bookId",
      name: "book",
      component: () => import("../views/BookView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/how",
      name: "how",
      component: () => import("../views/HowView.vue"),
    },
    {
      path: "/why",
      name: "why",
      component: () => import("../views/WhyView.vue"),
    },
    {
      path: "/who",
      name: "who",
      component: () => import("../views/WhoView.vue"),
    },
    {
      path: "/copyright",
      name: "copyright",
      component: () => import("../views/CopyrightView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  if (
    !localStorage.isLoggedIn &&
    (to.name == "account" || to.name == "wishlist")
  ) {
    console.log("Redirecting to /login");
    return "/login";
  }
});

export default router;
