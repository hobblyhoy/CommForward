import Vue from 'vue';

//Init
var vueMethods = {};
var vueComputed = {};
var vueWatch = {};
var vueData = {
	showPanel: 'need'
	, panels: {
		need: []
		, feel: []
		, pain: []
	}
	, panelSeeds: {
		need: ['Food', 'Water', 'Raise', 'Recline', 'Change Channel (News)', 'Change Channel (Other)', 'Immediate Attention']
		, feel: ['Happy', 'Sad', 'Bored', 'Lonely', 'Sick']
		, pain: ['Head', 'Neck', 'Chest', 'Stomach', 'Arms', 'Hands', 'Groin', 'Bottom', 'Legs', 'Feet']
	}
	, colorNeed: '#d9d9f3'
	, colorFeel: '#ceefe4'
	, colorPain: '#D6DFF0'
	, borderRadius: '15px'
	, configMode: false
};

vueComputed.currentPanel = function() {
	return this.panels[this.showPanel];
};

vueComputed.currentPanelColor = function() {
	switch (this.showPanel) {
		case 'need':
			return this.colorNeed;
		case 'feel':
			return this.colorFeel;
		case 'pain':
			return this.colorPain;
		default:
			throw 'Bad panel name in Store.currentPanelColor';
	}
};


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

//note, icons pulled from:
//https://icons8.com