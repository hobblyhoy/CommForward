import Vue from 'vue';

//Init
var vueMethods = {};
var vueComputed = {};
var vueWatch = {};
var vueData = {
	showPanel: 'need'
	, panels: {
		feel: []
		, need: []
	}
	, colorNeed: '#d9d9f3'
	, colorFeel: '#ceefe4'
	, borderRadius: '15px'
	, configMode: false
};

vueComputed.currentPanel = function() {
	return this.panels[this.showPanel];
}



window.cfStore = new Vue({
    data: function() {
		return vueData
	}
    , methods: vueMethods
    , computed: vueComputed
    , watch: vueWatch
    , created: function() {}
    , mounted: function() {}	
});