import Vue from 'vue'
import Router from 'vue-router'

//page
import Home from '../components/Home';
import Record from '../components/Record';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/record', component: Record },
    ]
})