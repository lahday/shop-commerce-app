import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faStore,faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitterSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './styles/index.css'



library.add(faUserSecret, faStore, faCartShopping,faFacebook,faInstagram,faTwitterSquare,faEnvelope,faLinkedin,faMagnifyingGlass)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
