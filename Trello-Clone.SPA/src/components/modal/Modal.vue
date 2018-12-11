<template>
    <transition name="modal">
        <div class="modal-background">
            <div
                class="modal"
                v-click-outside="closeModal">

                <icon-base
                    view-box="0 0 31.1 31.1"
                    class="modal__close-icon"
                    @click="closeModal">

                    <icon-close />
                </icon-base>

                <slot />

            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import {
        IconBase,
        IconClose,
    } from '@components/icons';

    import { EventBus } from '@/eventBus';

    @Component({
        components: {
            IconBase,
            IconClose,
        },
    })
    export default class Modal extends Vue {
        private closeModal() {
            EventBus.$emit('close-modal');
        }
    }
</script>

<style>

</style>
