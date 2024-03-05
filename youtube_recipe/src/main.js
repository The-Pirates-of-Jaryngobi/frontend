import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router';
//import router from './router' // 위 방식으로 라우터 설정

import App from './App.vue'
import Home from './views/Home.vue';
import Result from './views/Result.vue';
import About from './views/About.vue';
import ErrorPage from './views/Error.vue';

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
        component: () => import('./views/NoResult.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home }, // '/home' 경로에 Home 컴포넌트를 매핑
      { path: '/result/:inputData', component: Result }, // '/result' 경로에 Result 컴포넌트를 매핑하고, inputData라는 동적 매개변수를 정의
    ]
});

const app = createApp(App);

//app.use(createPinia())
app.use(router);

app.mount('#app');
