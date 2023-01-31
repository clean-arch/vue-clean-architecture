import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      redirect: { name: "audience" },
    },
    {
      path: "/audience",
      name: "audience",
      redirect: { name: "audience_contacts" },
      component: () => import("./pages/AudiencePage.vue"),
      children: [
        {
          path: "contacts/new",
          name: "audience_create_contact",
          component: () => import("./pages/AudienceCreateContactPage.vue"),
        },
        {
          path: "contacts/:listId?",
          name: "audience_contacts",
          component: () => import("./pages/AudienceContactsPage.vue"),
        },
        {
          path: "lists/new",
          name: "audience_create_list",
          component: () => import("./pages/AudienceCreateListPage.vue"),
        },
        {
          path: "lists",
          name: "audience_lists",
          component: () => import("./pages/AudienceListsPage.vue"),
        },
      ],
    },
    {
      path: "/files",
      name: "email_files",
      component: () => import("./pages/FilesPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./pages/NotFoundPage.vue"),
    },
  ],
});

export default router;
