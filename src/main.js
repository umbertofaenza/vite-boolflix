import { createApp } from "vue";
import App from "./App.vue";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

// add icons to the library
library.add(fasStar, farStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
