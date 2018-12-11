<template>
    <div class="block block-test col-3">
        {{data.name}}
    </div>
</template>

<script>
    //Init
    var vueMethods = {};
    var vueComputed = {};
    var vueWatch = {};


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
        height: 10rem;
    }
</style>

