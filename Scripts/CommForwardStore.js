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
		need: ['Food', 'Water', 'Raise', 'Recline', 'Change Channel', 'Immediate Attention']
		, feel: ['Happy', 'Sad', 'Bored', 'Lonely', 'Sick']
		, pain: ['Head', 'Neck', 'Chest', 'Stomach', 'Arms', 'Hands', 'Groin', 'Bottom', 'Legs', 'Feet']
	}
	, colorNeed: '#FFDBB9'
	, colorFeel: '#CEEFE4'
	, colorPain: '#D6DFF0'
	, borderRadius: '15px'
	, configMode: false
	, addCustomName: ''
	//, addCustomLogo: '' // doesn't work w/ image-picker, need to get it the oldschool way with $.val
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

vueComputed.logoList = function() {
	var allPanels = _.concat(this.panelSeeds.need, this.panelSeeds.feel, this.panelSeeds.pain).map(this.toCamelCase);
	// "just duplicate the images and let them key off the block id, whats the worst that could happen?" -_-
	return allPanels.filter(function(panel) {return panel !== "stomach" && panel !== "groin" });
	//return _(allPanels).map('id').value();
}

vueMethods.toCamelCase = function (string) {
	var regexParensAndWhitespace = /(\(|\)|\s)/g;
	return string.charAt(0).toLowerCase() + string.slice(1).replace(regexParensAndWhitespace, ''); 
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