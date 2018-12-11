<template>
    <div class="container-fluid">

        <div id="panel-selector" class="row">
            <div class="col-6">
                <div class="selector-option" style="background-color: blue;">
                    <div>I Need</div>
                </div>
            </div>
            <div class="col-6">
                <div class="selector-option" style="background-color: red;">
                    <div>I Need</div>
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

            }
        },
        methods: vueMethods,
        computed: vueComputed,
        watch: vueWatch,
    }
</script>

<style>
</style>

