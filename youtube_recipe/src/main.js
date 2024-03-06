//import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Home from './views/Home.vue';
import Result from './views/Result.vue';
import About from './views/About.vue';
import ErrorPage from './views/Error.vue';
import NoResult from './views/NoResult.vue';

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
  },
  {
      path: '/result',
      name: 'Result',
      component: Result,
  },
  {
      path: '/about',
      name: 'About',
      component: About,
  },
  {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
  },
  {
      path: '/:catchAll(.*)', // 404 에러 페이지 설정
      component: ErrorPage,
  },
  {
      path: '/noresult',
      name: 'NoResult',
      //component: () => import('./views/NoResult.vue'),
      component: Result,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
  // 라우터 경로와 컴포넌트를 매핑하는 설정
  // 예: { path: '/home', component: Home }
      { path: '/', component: Home }, // '/home' 경로에 Home 컴포넌트를 매핑
      { path: '/result/:inputData', component: Result }, // '/result' 경로에 Result 컴포넌트를 매핑하고, inputData라는 동적 매개변수를 정의
      { path: '/noresult', component: NoResult },
      { path: '/about', component: About },
      { path: '/error', component: ErrorPage },
  ]
});

loadFonts()

createApp(App)
  //.use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app');
