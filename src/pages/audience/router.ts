const audienceRoutes = [
  {
    path: "/audience",
    name: "audience",
    redirect: { name: "audience_contacts" },
    component: () => import("./AudiencePage.vue"),
    children: [
      {
        path: "contacts/new",
        name: "audience_create_contact",
        component: () => import("./AudienceCreateContactPage.vue"),
      },
      {
        path: "contacts/:listId?",
        name: "audience_contacts",
        component: () => import("./AudienceContactsPage.vue"),
      },
      {
        path: "lists/new",
        name: "audience_create_list",
        component: () => import("./AudienceCreateListPage.vue"),
      },
      {
        path: "lists",
        name: "audience_lists",
        component: () => import("./AudienceListsPage.vue"),
      },
    ],
  },
];

export default audienceRoutes;
