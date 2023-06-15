import { createApp } from 'vue'
import { router } from './route'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* FONT AWESOME Set up */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(fab)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
