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
        <div class="modal fade" id="add-custom-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="">
                        Add Custom
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">x</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>Name:</div>
                        <input v-model="store.addCustomName"/>
                        <div v-if="isMissingCustomName" style="color: red;">Name is required.</div>

                        <div style="margin-top: 2rem;">Image:</div>
                        <div style="max-height: 50vh; overflow: auto">
                            <select class="image-picker">
                                <option value=""></option>
                                <option v-for="(logo, index) in store.logoList" :key="index" :data-img-src="'./Icons/' + logo + '.png'" :value="logo"></option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="addCustomSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //Init
    var vueMethods = {};
    var vueComputed = {};
    var vueWatch = {};

    // Create block objects and populate the store.panels
    vueMethods.buildBlocks = function() {
        var self = this;
        var ignoreIds = JSON.parse(localStorage.getItem('ignoreIds')) || [];

        var createAndPushBlocks = function(names, targetArr) {
            names.forEach(function(name) {
                var id = this.store.toCamelCase(name);
                var toPush = {
                    id: id
                    , name: name
                    , logoSrc: './Icons/' + id + '.png'
                    , isSelected: false
                    , isVisible: ignoreIds.indexOf(id) === -1
                    , isAddCustom: false
                    , isCustom: false
                };
                
                targetArr.push(toPush);
            }.bind(this));
        }.bind(this);
        
        createAndPushBlocks(this.store.panelSeeds.feel, this.store.panels.feel);
        createAndPushBlocks(this.store.panelSeeds.need, this.store.panels.need);
        createAndPushBlocks(this.store.panelSeeds.pain, this.store.panels.pain);

        // Add custom blocks
        ['feel','need','pain'].forEach(function(type) {
            var localStorageBlockArray = JSON.parse(localStorage.getItem('customBlocks.' + type)) || [];
            localStorageBlockArray.forEach(function(customBlockToAdd) {
                this.store.panels[type].push(customBlockToAdd);
            }.bind(this));
        }.bind(this));
    }

    vueMethods.addCustomSave = function() {
        this.isMissingCustomName = false;
        var addCustomName = this.store.addCustomName;
        var addCustomIcon = $('.image-picker').val();

        if (addCustomName === '') {
            this.isMissingCustomName = true;
            return;
        }
        
        // Add block to memory
        var newBlock = {
            id: addCustomIcon ? addCustomIcon +  Date.now() : Date.now()
            , name: addCustomName
            , logoSrc: addCustomIcon ? './Icons/' + addCustomIcon + '.png' : ''
            , isSelected: false
            , isVisible: true
            , isAddCustom: false
            , isCustom: true
        };
        this.store.panels[this.store.showPanel].push(newBlock);

        // Add block to local storage
        var customBlocks = JSON.parse(localStorage.getItem('customBlocks.' + this.store.showPanel)) || [];
        customBlocks.push(newBlock);
        localStorage.setItem('customBlocks.' + this.store.showPanel, JSON.stringify(customBlocks));

        // Close the modal
        $('#add-custom-modal').modal('hide');

        // Clear our reusable variables/dom elements
        $('.image-picker').val('');
        $('.image-picker').data('picker').destroy();
        this.store.addCustomName = '';
    }

    export default {
        props: []
        , data: function() {
            return {
                store: window.cfStore
                , isMissingCustomName: false
            }
        }
        , methods: vueMethods
        , computed: vueComputed
        , watch: vueWatch
        , created: function() {
            this.buildBlocks();
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

    /* Overrides to the image picker */
    .image_picker_image {
        width: 80px;
        height: 80px;
    }
    .image_picker_selector{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>