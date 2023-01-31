import { createRouter, createWebHistory } from "vue-router";
import audienceRoutes from "./audience/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      redirect: { name: "audience" },
    },
    ...audienceRoutes,
    {
      path: "/files",
      name: "email_files",
      component: () => import("./FilesPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./NotFoundPage.vue"),
    },
  ],
});

export default router;
