import Vue from 'vue';
// todo gotta get this import size down. Consider individual plugin imports for bootstrap
// e.g. import 'bootstrap/js/dist/util';
// requires more work though, see:
// https://getbootstrap.com/docs/4.0/getting-started/webpack/
import Bootstrap from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
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