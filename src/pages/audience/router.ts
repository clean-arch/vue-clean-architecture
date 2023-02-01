const audienceRoutes = [
  {
    path: "/contacts/new",
    name: "audience_create_contact",
    component: () => import("./CreateContactPage.vue"),
  },
  {
    path: "/contacts/:listId?",
    name: "audience_contacts",
    component: () => import("./ContactsPage.vue"),
  },
];

export default audienceRoutes;
