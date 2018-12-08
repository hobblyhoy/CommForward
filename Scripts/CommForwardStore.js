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
};

vueMethods.toCamelCase = function (string) {
	return string.charAt(0).toLowerCase() + string.slice(1).replace(' ', ''); 
};

vueMethods.createFeelPanels = function() {
	var feelings = ['Happy', 'Sad', 'Hungry', 'In Pain'];

	feelings.forEach(function(feel) {
		// turn name into camelCase
		var id = this.toCamelCase(feel);
		var toPush = {
			id: id
			, name: feel
			, logo: id + '.png'
			, isSelected: false
		};

		this.panels.feel.push(toPush);
	}.bind(this));
}

window.cfStore = new Vue({
    data: vueData
    , methods: vueMethods
    , computed: vueComputed
    , watch: vueWatch
    , created: function() {
    	console.log('creating panels');
    	this.createFeelPanels();
    }
    , mounted: function() {}	
});