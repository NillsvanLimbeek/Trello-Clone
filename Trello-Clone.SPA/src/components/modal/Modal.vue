<template>
    <transition name="modal">
        <div class="modal-background">
            <div
                class="modal"
                :class="{
                    'modal__small': size === 'small',
                    'modal__medium': size === 'medium' }"
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
    import { Vue, Component, Prop } from '@/vue-script';

    import { EventBus } from '@/eventBus';
    import { BoardToUpdateDto } from '@/data/dto';

    import {
        IconBase,
        IconClose,
    } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconClose,
        },
    })
    export default class Modal extends Vue {
        @Prop({ default: 'medium'}) private size!: string;

        private closeModal() {
            EventBus.$emit('close-modal');
        }

        private created() {
            EventBus.$on('edit-board', (updateBoard: BoardToUpdateDto) => {
                this.$store.dispatch('updateBoard', updateBoard)
                    .then(() => {
                        this.closeModal();
                    });
            });
        }
    }
</script>

<style>

</style>
