import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/videos',
        component:Videos
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;