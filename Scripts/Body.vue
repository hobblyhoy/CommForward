<template>
    <div>
        <div id="panel-selector-container">
            <panel-selector></panel-selector>
        </div>
        <div id="panel-container">
            <panel></panel>
        </div>
    </div>
</template>

<script>
    //Init
    var vueMethods = {};
    var vueComputed = {};
    var vueWatch = {};

    vueMethods.toCamelCase = function (string) {
        return string.charAt(0).toLowerCase() + string.slice(1).replace(' ', ''); 
    };

    // Create block objects and populate the store.panels
    vueMethods.buildBlocks = function() {
        var self = this;

        var createAndPushBlocks = function(names, targetArr) {
            names.forEach(function(name) {
                // turn name into camelCase
                var id = self.toCamelCase(name);
                var toPush = {
                    id: id
                    , name: name
                    , logo: id + '.png'
                    , isSelected: false
                };
                
                targetArr.push(toPush);
            });
        }
        
        var feelings = ['Happy', 'Sad', 'Hungry', 'In Pain'];
        var needs = ['Food', 'Raised', 'Reclined', 'Channel Changed', 'Immediate'];
        createAndPushBlocks(feelings, this.store.panels.feel);
        createAndPushBlocks(needs, this.store.panels.need)

        


        console.log('Finished populating Panels');
    }

    export default {
        props: []
        , data: function() {
            return {
                store: window.cfStore
            }
        }
        , methods: vueMethods
        , computed: vueComputed
        , watch: vueWatch
        , created: function() {
            this.buildBlocks();
        }
        , mounted: function() {
            console.log('body mounted');
        }
    }
</script>

<style>

    #panel-selector-container {
        height: 15vh;
    }

    #panel-container {
	width: 100%; 
	height: 85vh; 
	overflow-y: auto;
    }

</style>