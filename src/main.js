import Vue from "vue";
import App from "./App.vue";
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import VueRouter from "vue-router";
import Users from './components/Users'
import Test from './components/Test'

Vue.use(vueResource)
Vue.use(vueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
