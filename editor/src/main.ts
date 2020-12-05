import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

declare global {
  interface Window { electron: typeof Electron; }
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
