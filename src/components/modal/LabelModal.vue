<template>
    <div class="label-modal">
        <div class="label-modal__title">
            Label Modal

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.1 31.1"
                class="label-modal__close"
                @click="$emit('close')">

                <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
            </svg>
        </div>

        <div class="label-modal__body">

        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    export default class LabelModal extends Vue {
        private closeModal() {
            this.$emit('close');
        }
    }
</script>

<style>

</style>
