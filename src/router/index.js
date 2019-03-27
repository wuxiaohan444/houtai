import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import login from '@/pages/login';
import test from '@/pages/test';
import myEcharts from '@/pages/myEcharts'
import fatherTable from '@/pages/fatherTable'
import level from '@/pages/level'
import home from '@/pages/home'

Vue.use(Router);
export default new Router({
    base: '/dist/',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: index,
                },
                {
                    path: '/myEcharts',
                    name: 'myEcharts',
                    component: myEcharts
                }, {
                    path: '/fatherTable',
                    name: 'fatherTable',
                    component: fatherTable
                },
                {
                    path: '/level',
                    name:'level',
                    component:level
                }
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },

    ]
})