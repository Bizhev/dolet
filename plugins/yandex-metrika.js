import Vue from "vue";
import VueRouter from "vue-router";
import VueYandexMetrika from "vue-yandex-metrika";
const MYDATA = require("@/data/index.json");

let routes = function() {
  let routes = MYDATA.map(task => {
    return "/task/" + task.id;
  });
  return routes;
};
const router = new VueRouter(routes); // your routes

Vue.use(VueYandexMetrika, {
  id: 50035924,
  router: router,
  env: process.env.NODE_ENV
  // other options
});
