import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia;
const app = createApp(App);

app.use(pinia);
app.mount("app");

createApp(App).use(router).mount("#app");
