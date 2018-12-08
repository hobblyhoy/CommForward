
import Vue from 'vue';
import './Scripts/CommForwardStore.js';
import Body from './Scripts/Body.vue';
import PrimarySelector from './Scripts/PrimarySelector.vue';
import Panel from './Scripts/Panel.vue';

console.log('index.js load');

Vue.component('vue-body', Body);
Vue.component('primary-selector', PrimarySelector);
Vue.component('panel', Panel);

new Vue({
	el: '#app'
});