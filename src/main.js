// import Vue from 'vue';
import { createApp } from 'vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
// import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify, {
//   icons: {
//     vue: {
//       component: FontAwesomeIcon,
//       props: {
//         icon: ['mdiChevronDown', 'mdiChevronUp'],
//       },
//     },
//   },
// });

import App from './App.vue';

import './assets/main.css';

import './store';
import store from './store';

const app = createApp(App).use(store);

// app.use(router);

app.mount('#app');
