import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/views/Home.vue';
import About from './components/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]


const router = createRouter({
    history: createWebHistory(),
    base: window.location.host,
    routes 
})

export default router;