import Vue from 'vue';
// todo gotta get this import size down. Consider individual plugin imports for bootstrap
// e.g. import 'bootstrap/js/dist/util';
// requires more work though, see:
// https://getbootstrap.com/docs/4.0/getting-started/webpack/
// import Bootstrap from 'bootstrap'; 
import './Scripts/JqueryGlobal.js';
import 'bootstrap';
import './Scripts/CommForwardStore.js';
import 'image-picker';
import _ from 'lodash';
window._ = _;

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'image-picker/image-picker/image-picker.css'
import './style.css'

// Components
import Body from './Scripts/Body.vue';
import PanelSelector from './Scripts/PanelSelector.vue';
import Panel from './Scripts/Panel.vue';
import Block from './Scripts/Block.vue';

Vue.component('vue-body', Body);
Vue.component('panel-selector', PanelSelector);
Vue.component('panel', Panel);
Vue.component('block', Block);

new Vue({
	el: '#app'
});