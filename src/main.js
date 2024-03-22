/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// import "preline/preline"
//in your `main.js` file
// import '../node_modules/flowbite-vue/dist/index.css'

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

// Components
import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config';
import Wind from '@/assets/wind';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import "@fortawesome/fontawesome-free/css/all.min.css";


// Composables
import { createApp } from 'vue'
const app = createApp(App)

registerPlugins(app)
app.use(PrimeVue, {
  unstyled: true,
  pt: Wind
});
app.use(ToastService);
app.use(ConfirmationService);



app.mount('#app')
