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


    var alarm = new Audio('TempleBell.mp3');
    vueMethods.blockClick = function(block) {
        block.isSelected = !block.isSelected;
        if (block.name === "Immediate") {
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
            block.isSelected = false;
            this.$nextTick(function() {
                block.isSelected = true;
            });
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