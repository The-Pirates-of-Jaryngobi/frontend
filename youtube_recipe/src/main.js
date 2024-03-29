import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './plugins/webfontloader';
//import { createPinia } from 'pinia'
import App from './App.vue';
import Home from './views/Home.vue';
import Result from './views/Result.vue';
import About from './views/About.vue';
import ErrorPage from './views/Error.vue';
import NoResult from './views/NoResult.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 라우터 경로와 컴포넌트를 매핑하는 설정
        // 예: { path: '/home', component: Home } '/home' 경로에 Home 컴포넌트를 매핑
        { 
            path: '/', 
            name: 'Home', 
            component: Home 
        },
        { 
            path: '/result/:inputData', 
            name: 'Result',
            component: Result 
        },
        { 
            path: '/about',
            name: 'About',
            component: About 
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import('../views/About.vue')
        },
        { 
            path: '/error', 
            name: 'ErrorPage',
            component: ErrorPage 
        },
        { 
            path: '/noresult', 
            name: 'NoResult',
            component: NoResult 
        },
        { 
            path: '/:catchAll(.*)', 
            component: ErrorPage 
        },
    ]
});

// Vuetify 설정
const vuetify = createVuetify({
    components,
    directives,
})


loadFonts();

createApp(App)
    //.use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app');

