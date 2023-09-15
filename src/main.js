import { createApp } from "vue";
import App from "./App.vue";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

// add icons to the library
library.add();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
