<template>
    <div>
        <div id="panel-selector-container">
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

    vueMethods.test = function() {
        console.log('testssss');
    }

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
        mounted: function() {
            console.log('body mounted');
        }
    }
</script>

<style>
</style>
