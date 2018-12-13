<template>
    <div id="panel-selector" class="container-fluid">
        <div  class="row" style="height: 90%;">
            <div class="col-4">
                <div class="panel-selector-option round-top"
                        :class="{ 'inactive-panel-shadow': store.showPanel !== 'need' }"
                        :style="{ 'background-color': store.colorNeed }"
                        v-on:click="store.showPanel='need'">
                    <div style="padding: 0 10px;">I Need</div>
                </div>
            </div>
            <div class="col-4">
                <div class="panel-selector-option round-top" 
                        :class="{ 'inactive-panel-shadow': store.showPanel !== 'feel' }"
                        :style="{ 'background-color': store.colorFeel }"
                        v-on:click="store.showPanel='feel'">
                    <div style="padding: 0 10px;">I Feel</div>
                </div>
            </div>
            <div class="col-4">
                <div class="panel-selector-option round-top" 
                        :class="{ 'inactive-panel-shadow': store.showPanel !== 'pain' }"
                        :style="{ 'background-color': store.colorPain }" 
                        v-on:click="store.showPanel='pain'">
                    <div style="padding: 0 10px;">Pain / Discomfort</div>
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


    export default {
        props: [],
        data: function() {
            return {
                store: window.cfStore
            }
        },
        methods: vueMethods,
        computed: vueComputed,
        watch: vueWatch,
    }
</script>

<style>
    #panel-selector {
        height: 100%;
        /*padding-top: 15px;*/
    }

    .panel-selector-option {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.75rem;
        font-weight: bold;
        cursor: pointer;
    }

    .inactive-panel-shadow {
        border-image: linear-gradient(rgba(255,255,255,0) 99%, rgba(0,0,0,0.1));
        border-image-slice: 2;
        border-width: 10px;
        border-bottom-style: solid;
    }
</style>

