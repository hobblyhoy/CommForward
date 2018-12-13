<template>
    <div class="panel container-fluid">
        <div class="row" >
            <div class="col-12" >
                <div :style="{ backgroundColor: store.currentPanelColor }" class="round-bottom container-fluid">
                    <div class="row">
                        <block v-for="block in store.currentPanel" 
                                :key="block.id" 
                                :data="block"
                                v-on:blockClick="blockClick"
                                v-if="block.isVisible || store.configMode">
                        </block>
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

    var alarmSound = new Audio('Beep.mp3');
    var clickSound = new Audio('Click.mp3')
    vueMethods.blockClick = function(block) {
        // toggle selection
        block.isSelected = !block.isSelected;

        // Small click noise
        clickSound.play();

        // Immediate action persistant noise
        if (block.id === "immediateAttention") {
            if (block.isSelected === true) {
                alarmSound.loop = true;
                alarmSound.play();
            } else {
                alarmSound.pause();
                alarmSound.currentTime = 0;
            }
        }
        
        var selectedBlocks = this.store.currentPanel.filter(function(blockFromPanel) {
            return blockFromPanel.isSelected;
        });

        // remove and re-apply isSelected so the animations occur in unison.
        selectedBlocks.forEach(function(block) {
            block.isSelected = false;
            // EDIT figured out why nextTick fails here:
            // "nextTick allows you to do something after you have changed the data and Vue has updated the DOM 
            // based on your data change, but before browser has rendered those changes on the page."
            // I thought it was queing up until after the class was yanked off the block but that was wrong
            // which since that also gets ploped into the queue a setTimeout 0 doesn't guarntee (and likely wont be)
            // before the browser actually pulls the class.
            // I could code around that but honestly this is the least important feature ever, I'm A-OK with a band-aid.
            setTimeout(function() {
                block.isSelected = true;
            }, 100);
        }.bind(this));
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
    }
</script>

<style>
    .panel {
        margin-bottom: 15px;
    }
</style>