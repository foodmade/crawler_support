//element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
//codemirror
import codemirror from 'vue-codemirror-lite'

import Vue from 'vue'
import App from './App.vue'
import Container from './components/Container'

Vue.use(ElementUI);
Vue.use(codemirror);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

Vue.component('container',{
    template:Container
});
