<template>
    <!-- <transition-group name="modal">
            <ModalBody
                class="modal"
                key="body"
            />

            <div
                class="modal-background"
                @click="$emit('close-modal')"
                key="background" />
    </transition-group> -->
    <div>
        <div class="modal-background">
            <div
                class="modal"
                v-click-outside="clickOutside">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.1 31.1"
                    class="modal__close-icon"
                    @click="$emit('close-modal')">

                    <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import ModalBody from './ModalBody.vue';

    @Component({
        components: {
            ModalBody,
        },
    })

    export default class Modal extends Vue {
        private clickOutside() {
            this.$emit('close-modal');
        }
    }
</script>

<style>

</style>
