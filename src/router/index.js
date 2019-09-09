import Vue from 'vue'
import Router from 'vue-router'

//page
import Home from '../components/Home';
import Monaco from '../components/MonacoShow';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/monaco', component: Monaco },
    ]
})