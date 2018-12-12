<template>
    <div class="block col-12 col-sm-6 col-md-3">
        <div class="block-button round-top round-bottom" 
                v-on:click="$emit('blockClick', data)"
                :class="{ pulse: data.isSelected }">
            {{data.name}}
        </div>
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
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .block-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgba(0,0,0,0.4);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .pulse {
        animation: pulse 2s infinite;
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

