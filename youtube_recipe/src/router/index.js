import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import Result from './views/Result.vue';
import ErrorPage from './views/Error.vue';
import NoResult from './views/NoResult.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      // 라우터 경로와 컴포넌트를 매핑하는 설정
      // 예: { path: '/home', component: Home } '/home' 경로에 Home 컴포넌트를 매핑
      { 
        path: '/', 
        name: 'home', 
        component: Home 
      },
      { 
        path: '/result/:inputData', 
        name: 'result',
        component: Result 
      },
      { 
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
      },
      { 
        path: '/error', 
        name: 'error',
        component: ErrorPage 
      },
      { 
        path: '/noresult', 
        name: 'noresult',
        component: NoResult 
      },
      { 
        path: '/:catchAll(.*)', 
        component: ErrorPage 
      },
  ]
});


export default router
