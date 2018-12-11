<template>
    <div class="container-fluid" style="height: 100%">
        <div id="panel-selector" class="row">
            <div class="col-6">
                <div class="selector-option round-top" style="background-color: #d9d9f3;" v-on:click="store.showPanel='need'">
                    <div>I Need</div>
                </div>
            </div>
            <div class="col-6">
                <div class="selector-option round-top" style="background-color: #ceefe4;" v-on:click="store.showPanel='feel'">
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
</style>

