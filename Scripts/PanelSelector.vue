<template>
    <div id="panel-selector" class="container-fluid">
        <div  class="row" style="height: 100%;">
            <div class="col-6">
                <div class="panel-selector-option round-top"
                        :class="{ 'inactive-panel-shadow': store.showPanel !== 'need' }"
                        style="background-color: #d9d9f3;" 
                        v-on:click="store.showPanel='need'">
                    <div>I Need</div>
                </div>
            </div>
            <div class="col-6">
                <div class="panel-selector-option round-top" 
                        :class="{ 'inactive-panel-shadow': store.showPanel !== 'feel' }"
                        style="background-color: #ceefe4;" 
                        v-on:click="store.showPanel='feel'">
                    <div>I Feel</div>
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
        padding-top: 15px;
    }

    .panel-selector-option {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .inactive-panel-shadow {
        border-image: linear-gradient(rgba(255,255,255,0) 99%, rgba(0,0,0,0.1));
        border-image-slice: 2;
        border-width: 10px;
        border-bottom-style: solid;
    }
</style>

