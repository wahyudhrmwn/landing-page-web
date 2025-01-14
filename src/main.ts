import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
  faHome,
  faBriefcase,
  faStar,
  faSearch,
  faChartLine,
  faFileAlt,
  faGraduationCap,
  faExchangeAlt,
  faUserSecret,
  faGear,
  faArrowRight,
  faArrowLeft,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

// Import the Instagram icon from the brands set
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faGear,
  faArrowRight,
  faArrowLeft,
  faInstagram,
  faLinkedin,
  faHome,
  faStar,
  faBriefcase,
  faSearch,
  faChartLine,
  faFileAlt,
  faGraduationCap,
  faExchangeAlt,
  faAngleLeft,
  faAngleRight,
)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
