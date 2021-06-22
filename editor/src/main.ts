import Vue from 'vue';
import App from './App.vue';
import router from './router';

import SureToast from './common/toast/vue-sure-toast';
import ToastManager from './common/toast/toast-manager';

Vue.use(SureToast, {
  position: 'top-right',
  theme: 'success'
});

Vue.config.productionTip = false;

declare global {
  interface Window { electron: typeof Electron; }
}

// TODO: Figure out how to properly extend the vue prototype with proper typescript types.
declare global {
  interface Vue { $sureToast: ToastManager; }
}

import store from './store/store';

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
