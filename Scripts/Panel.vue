<template>
    <div class="panel container-fluid">
        <div class="row" >
            <div class="col-12" >
                <div :style="{ backgroundColor: backgroundColor }" class="round-bottom container-fluid">
                    <div class="row">
                        <block v-for="block in store.currentPanel" 
                                :key="block.id" 
                                :data="block"
                                v-on:blockClick="blockClick">
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

    vueComputed.backgroundColor = function() {
        switch (this.store.showPanel) {
            case 'need':
                return this.store.colorNeed;
            case 'feel':
                return this.store.colorFeel;
            default:
                throw 'Bad panel name in Panel.backgroundColor';
        }
    };


    var alarm = new Audio('Beep.mp3');
    vueMethods.blockClick = function(block) {
        // toggle selection
        block.isSelected = !block.isSelected;

        //trigger warning sounds
        if (block.id === "immediateAttention") {
            if (block.isSelected === true) {
                alarm.loop = true;
                alarm.play();
            } else {
                alarm.pause();
                alarm.currentTime = 0;
            }
        }
        
        var selectedBlocks = this.store.currentPanel.filter(function(blockFromPanel) {
            return blockFromPanel.isSelected;
        });

        // remove and re-apply isSelected so the animations occur in unison.
        selectedBlocks.forEach(function(block) {
            console.log('setting ' + block.id + ' to false');
            block.isSelected = false;
            // EDIT figured out why nextTick fails here:
            // "nextTick allows you to do something after you have changed the data and Vue has updated the DOM 
            // based on your data change, but before browser has rendered those changes on the page."
            // I thought it was queing up until after the class was yanked off the block but that was wrong
            // which since that also gets ploped into the queue a setTimeout 0 doesn't guarntee (and likely wont be)
            // before the browser actually pulls the class.
            // I could code around that but honestly this is the least important feature ever, I'm A-OK with a band-aid.
            setTimeout(function() {
                console.log('setting ' + block.id + ' to true');
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
</style>