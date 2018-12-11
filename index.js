import Vue from 'vue';
import './Scripts/CommForwardStore.js';

// Components
import Body from './Scripts/Body.vue';
import PanelSelector from './Scripts/PanelSelector.vue';
import Panel from './Scripts/Panel.vue';

console.log('index.js load');

Vue.component('vue-body', Body);
Vue.component('panel-selector', PanelSelector);
Vue.component('panel', Panel);

new Vue({
	el: '#app'
});