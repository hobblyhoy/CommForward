<template>
    <div class="block col-12 col-sm-6 col-md-3">
        <div class="block-button round-top round-bottom" 
                v-on:click="$emit('blockClick', data)"
                :class="{ pulse: data.isSelected && !store.configMode }">
            <span>{{data.name}}</span>
            <img :src="imgSrc" width="96px" height="96px">
            <div v-if="store.configMode" 
                    class="block-toggle round-top round-bottom"
                    :class="{ dimmed: !data.isVisible }"
                    v-on:click.stop="blockToggleClick">
                <div class="block-toggle-button">
                    <div v-if="data.isVisible">
                        <img src="../Icons/remove.png">
                    </div>
                    <div v-else>
                        <img src="../Icons/add.png">
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

    vueComputed.imgSrc = function() {
        return './Icons/' + this.data.id + '.png';
    }

    vueMethods.blockToggleClick = function() {
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

