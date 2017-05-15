import Vue from 'vue';
import App from './index.vue';

window.$vm = new Vue({
    el: '#app',
    render: (h) => h(App)
});
