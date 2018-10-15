<template>
    <transition name="modal">
        <div class="modal-backdrop" v-click-outside="logMessage">
            <div class="modal">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.1 31.1"
                    class="modal__close-icon"
                    @click="$emit('close')">

                    <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
                </svg>

            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})

    export default class Modal extends Vue {

    }
</script>

<style>

</style>
