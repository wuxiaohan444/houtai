import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import '../theme/index.css'
import echarts from 'echarts'
import qs from 'qs'
import "./assets/font/iconfont.css"
import store from "./store"

router.beforeEach((to, from, next) => {
    if (sessionStorage.getItem("user")) {
        next();
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login');
        }
    }

});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 对于结果处理
axios.interceptors.response.use(response => {
    if (response.data.code === 0) {
        console.log(1);
    } else if (response.data.code === 1001) {

        console.log(2);
    } else if (response.data.code === 1004) {
        console.log(3);
    }
});


Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

