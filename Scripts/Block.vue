<template>
    <div class="block col-12 col-sm-6 col-md-3">
        <div class="block-button round-top round-bottom" 
                v-on:click="$emit('blockClick', data)"
                :class="{ pulse: data.isSelected && !store.configMode }">
            <span style="margin-bottom: 0.5rem;">{{data.name}}</span>
            <img v-if="data.logoSrc" :src="data.logoSrc" width="96px" height="96px">
            <div v-if="store.configMode" 
                    class="block-toggle round-top round-bottom"
                    :class="{ dimmed: !data.isVisible }"
                    v-on:click.stop="blockToggleClick">
                <div v-if="!data.isAddCustom" class="block-toggle-button">
                    <div v-if="data.isVisible" style="display: inline-block">
                        <img src="../Icons/show.png" style="width: 2rem; height: 2rem;">
                    </div>
                    <div v-else style="display: inline-block">
                        <img src="../Icons/hide.png" style="width: 2rem; height: 2rem;">
                    </div>
                    <div v-if="data.isCustom" v-on:click.stop="blockDeleteClick" style="display: inline-block">
                        <img src="../Icons/remove.png" style="width: 2rem; height: 2rem;">
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

    vueMethods.blockToggleClick = function() {
        //// Add Custom Block \\\\
        if (this.data.isAddCustom) {
            $(".image-picker").imagepicker();
            $('#add-custom-modal').modal('show');
            return;
        }

        //// Regular Block \\\\
        var block = this.data;
        // pull in our local storage
        var ignoreIds = JSON.parse(localStorage.getItem('ignoreIds')) || [];
        if (block.isVisible) {
            // add it to local storage ignore list
            block.isVisible = false;
            ignoreIds.push(block.id);
        } else {
            // remove it from local storage ignore list
            block.isVisible = true;
            var indexToRemove = ignoreIds.indexOf(block.id);
            ignoreIds.splice(indexToRemove, 1);
        }
        // save back to local storage
        localStorage.setItem('ignoreIds', JSON.stringify(ignoreIds));
    }

    vueMethods.blockDeleteClick = function() {
        // Delete it from memory
        var blockToRemove = this.data;
        var currentPanel = this.store.panels[this.store.showPanel];
        _.remove(this.store.panels[this.store.showPanel], function(block) {
            return blockToRemove === block;
        });
        this.$set(this.store.panels[this.store.showPanel],currentPanel);

        // Delete it from local storage
        var customBlocks = JSON.parse(localStorage.getItem('customBlocks.' + this.store.showPanel)) || [];
        _.remove(customBlocks, function(block) {
            return blockToRemove.id === block.id;
        });
        localStorage.setItem('customBlocks.' + this.store.showPanel, JSON.stringify(customBlocks));
    }

    export default {
        props: ['data']
        , data: function() {
            return {
                store: window.cfStore
            }
        }
        , methods: vueMethods
        , computed: vueComputed
        , watch: vueWatch
    }
</script>

<style>
    .block {
        height: 12rem;
        margin-top: 15px;
        margin-bottom: 15px;
        line-height: 1.8rem;
    }

    .block-button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        border: 2px solid rgba(0,0,0,0.4);
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;
    }

    .pulse {
        animation: pulse 2s infinite;
    }

    .block-toggle {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .block-toggle-button {
        position: absolute;
        top: 0;
        right: 0;
    }

    .dimmed {
        background-color: rgba(255,255,255,0.5);
    }

    @keyframes pulse {
        0% {
        }
        50% {
            background-color: white;
        }
        100% {
        }        
    }
</style>

