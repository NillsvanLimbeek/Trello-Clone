<template>
    <transition name="modal">
        <div class="modal-background">
            <div
                class="modal"
                v-click-outside="closeModal">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.1 31.1"
                    class="modal__close-icon"
                    @click="closeModal">

                    <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
                </svg>

                <input
                    type="text"
                    class="column__input"
                    :placeholder="modal.title">
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IItem } from '@data/models/types';
    import { EventBus } from '@/eventBus';

    @Component({})

    export default class Modal extends Vue {
        @Prop({ required: true }) private id!: number;

        private closeModal() {
            EventBus.$emit('close-modal');
        }

        private get modal() {
            const item: IItem = this.$store.getters.getItem(this.id);
            return item;
        }
    }
</script>

<style>

</style>
