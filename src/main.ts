import { createApp } from "vue";
import { createPinia } from "pinia";
import { faker } from "@faker-js/faker";

import App from "./App.vue";
import router from "./pages/router";

import "./assets/main.css";
import {
  BaseButton,
  BaseNav,
  BasePageHeader,
  BaseSelect,
  BaseTable,
} from "./shared/uikit";

faker.seed(10);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("BaseNav", BaseNav);
app.component("BaseButton", BaseButton);
app.component("BaseSelect", BaseSelect);
app.component("BasePageHeader", BasePageHeader);
app.component("BaseTable", BaseTable);

app.mount("#app");
