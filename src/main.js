import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import firebase from 'firebase/app';
import 'firebase/analytics'

// // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFdjN0MvRwatdGpSEozi1zM6ye-JfPq-A",
  authDomain: "essoccercoach.firebaseapp.com",
  databaseURL: "https://essoccercoach.firebaseio.com",
  projectId: "essoccercoach",
  storageBucket: "essoccercoach.appspot.com",
  messagingSenderId: "359986135028",
  appId: "1:359986135028:web:03cc97347a523c002103a1",
  measurementId: "G-GHNVKKV4PB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const analytic = firebase.analytics();

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
