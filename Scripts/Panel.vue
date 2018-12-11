<template>
    <div class="panel container-fluid">
        <div class="row" >
            <div class="col-12" >
                <div :style="{ backgroundColor: backgroundColor }" class="round-bottom">
                    <div class="row">
                        <block v-for="block in store.currentPanel" :key="block.id" :data="block"></block>
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
    .block-test {
        color: green; /*test*/
    }
</style>