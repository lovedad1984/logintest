import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

// export const router = new VueRouter({

const rejectAuthUser = (to, from, next) => {
    if(store.state.isLogin === true) {
        alert('block')
        next('/')
    } else {
        next()
    }
}
const onlyAuthUser = (to, from, next) => {
    if(store.state.isLogin === false) {
        alert('need login')
        next('/')
    } else {
        next()
    }
}

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: 'home',
            component: () => import(/* webpackChunkName: 'home' */ "../views/Home.vue")
        },
        {
            path: "/login",
            name: 'login',
            beforeEnter: rejectAuthUser,
            component: () => import(/* webpackChunkName: 'login' */ "../views/Login.vue")
        },
        {
            path: "/mypage",
            name: 'mypage',
            beforeEnter: onlyAuthUser,
            component: () => import(/* webpackChunkName: 'mypage' */ "../views/Mypage.vue")
        },
    ]
})