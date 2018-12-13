<template>
    <div>
        <div id="panel-selector-container">
            <div style="height: 10%; text-align: right;">
                <img src="../Icons/settings.png" 
                        style="vertical-align: top; height: 15px; width: 15px; cursor: pointer;"
                        v-on:click="store.configMode = !store.configMode">
            </div>
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
        var regexParensAndWhitespace = /(\(|\)|\s)/g;
        return string.charAt(0).toLowerCase() + string.slice(1).replace(regexParensAndWhitespace, ''); 
    };

    // Create block objects and populate the store.panels
    vueMethods.buildBlocks = function() {
        var self = this;
        var ignoreIds = JSON.parse(localStorage.getItem('ignoreIds')) || [];

        var createAndPushBlocks = function(names, targetArr) {
            names.forEach(function(name) {
                // turn name into camelCase
                var id = self.toCamelCase(name);
                var toPush = {
                    id: id
                    , name: name
                    //, logo: id + '.png' //if it's a simple, once used formula why obscure it away into the object?
                    , isSelected: false
                    , isVisible: ignoreIds.indexOf(id) === -1
                };
                
                targetArr.push(toPush);
            });
        }
        
        createAndPushBlocks(this.store.panelSeeds.feel, this.store.panels.feel);
        createAndPushBlocks(this.store.panelSeeds.need, this.store.panels.need);
        createAndPushBlocks(this.store.panelSeeds.pain, this.store.panels.pain);

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
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        background-color: #f4f0e6; /* Stop it from being see through on scroll */
    }

    #panel-container {
        width: 100%; 
        margin-top: 15vh;
        height: 85vh; 
        /* overflow-y: auto; */
    }
</style>