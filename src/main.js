// leave this alone
import Vue from 'vue';
import App from './App.vue';
import router from './router'

// import new plugs here
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";

// Install the authentication plugin
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});


// Leave this alone
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
