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

                <div class="modal__title">
                    <div class="modal__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" class="modal-icon">
                            <path d="M26.5 10.5l-4.6-6.5L21.5 3.5H0v53h60v-46H26.5zM58 12.5v5H31.5l-3.6-5H58zM2 54.5v-49h18.5l5 7h0l4.7 6.6c0.2 0.3 0.5 0.4 0.8 0.4V19.5h27v35H2z"/>
                        </svg>
                    </div>

                    <div class="modal__content">
                        <input
                            type="text"
                            class="modal__input"
                            :placeholder="modal.title">

                        <p class="modal__sub-title">
                            In list <span class="modal__list-name">{{ column.title }}</span>
                        </p>
                    </div>
                </div>

                <div class="modal__labels">
                    <div class="modal__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 60 60"
                            class="modal-icon">
                                <path d="M59.2 0.3c-0.4-0.4-1-0.4-1.4 0L54.1 4H30.8L1.5 33.5c-0.7 0.7-1 1.6-1 2.5s0.4 1.8 1 2.5l20.5 20.5c0.7 0.7 1.6 1 2.5 1 0.9 0 1.8-0.3 2.5-1l28.5-29.3V5.4l3.7-3.7C59.6 1.3 59.6 0.7 59.2 0.3zM53.5 28.9L25.6 57.6c-0.6 0.6-1.6 0.6-2.2 0L2.9 37.1c-0.6-0.6-0.6-1.6 0-2.2L31.6 6h20.4l-4.8 4.8C46.5 10.3 45.5 10 44.5 10c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-1-0.3-2-0.8-2.8l4.8-4.8V28.9zM47.5 15c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3c0.5 0 0.9 0.1 1.3 0.3l-2 2c-0.4 0.4-0.4 1 0 1.4C44 15.9 44.2 16 44.5 16s0.5-0.1 0.7-0.3l2-2C47.4 14.1 47.5 14.5 47.5 15z"/>
                        </svg>
                    </div>

                    <div class="modal__content">
                        <p class="modal__title">Labels</p>
                        <Labels :labels="modal.colorLabels"/>
                    </div>
                </div>

                <div class="modal__description">
                    <div class="modal__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22.9 22.9"
                            class="modal-icon">
                                <path d="M11.5 22.8H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h11c0.3 0 0.5 0.2 0.5 0.5S11.7 22.8 11.5 22.8z"/>
                                <path d="M22.4 15.6H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 15.6 22.4 15.6z"/>
                                <path d="M22.4 8.3H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 8.3 22.4 8.3z"/>
                                <path d="M22.4 1.1H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 1.1 22.4 1.1z"/>
                            </svg>
                    </div>

                    <div class="modal__content">
                        Description
                    </div>
                </div>

                <div class="modal__comments">
                    <div class="modal__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 33 33"
                            class="modal-icon">
                                <path d="M7.3 32.7c-0.1 0-0.2 0-0.2-0.1 -0.2-0.1-0.3-0.3-0.3-0.4v-7.1C2.4 22.8 0 18.8 0 13.8 0 6.1 7.1 0.3 16.5 0.3S33 6.1 33 13.8c0 7.7-7.1 13.5-16.5 13.5 -0.3 0-0.6 0-0.9 0l0 0 -8 5.3C7.5 32.7 7.4 32.7 7.3 32.7zM16.5 1.3C7.7 1.3 1 6.7 1 13.8c0 3.3 1.1 7.8 6.5 10.5 0.2 0.1 0.3 0.3 0.3 0.4v6.5l7.4-4.9c0.1-0.1 0.2-0.1 0.3-0.1l0.2 0c0.3 0 0.6 0 0.9 0 8.8 0 15.5-5.4 15.5-12.5S25.3 1.3 16.5 1.3z"/>
                        </svg>
                    </div>

                    <div class="modal__content">
                        Comments
                    </div>
                </div>

                <div class="modal__activity">
                    <div class="modal__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 489.7 489.7"
                            class="modal-icon">
                                <path d="M52.7 134.8c29.1 0 52.7-23.7 52.7-52.7s-23.6-52.8-52.7-52.8S0 53 0 82 23.7 134.8 52.7 134.8zM52.7 53.8c15.6 0 28.2 12.7 28.2 28.2s-12.7 28.2-28.2 28.2 -28.2-12.7-28.2-28.2S37.2 53.8 52.7 53.8z"/>
                                <path d="M52.7 297.6c29.1 0 52.7-23.7 52.7-52.7s-23.6-52.7-52.7-52.7S0 215.8 0 244.9 23.7 297.6 52.7 297.6zM52.7 216.7c15.6 0 28.2 12.7 28.2 28.2s-12.7 28.2-28.2 28.2 -28.2-12.6-28.2-28.2S37.2 216.7 52.7 216.7z"/>
                                <path d="M52.7 460.5c29.1 0 52.7-23.7 52.7-52.7 0-29.1-23.7-52.7-52.7-52.7S0 378.8 0 407.8C0 436.8 23.7 460.5 52.7 460.5zM52.7 379.5c15.6 0 28.2 12.7 28.2 28.2 0 15.6-12.7 28.2-28.2 28.2s-28.2-12.7-28.2-28.2C24.5 392.2 37.2 379.5 52.7 379.5z"/>
                                <path d="M175.9 94.3h301.5c6.8 0 12.3-5.5 12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8 0-12.3 5.5-12.3 12.3S169.1 94.3 175.9 94.3z"/>
                                <path d="M175.9 257.2h301.5c6.8 0 12.3-5.5 12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8 0-12.3 5.5-12.3 12.3S169.1 257.2 175.9 257.2z"/>
                                <path d="M175.9 420h301.5c6.8 0 12.3-5.5 12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8 0-12.3 5.5-12.3 12.3S169.1 420 175.9 420z"/>
                        </svg>
                    </div>

                    <div class="modal__content">
                        Activity
                    </div>
                </div>
                <div class="modal__card-actions">Card Actions</div>


            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import Labels from './Labels.vue';

    import { IItem, IColumn } from '@data/models/types';
    import { EventBus } from '@/eventBus';

    @Component({
        components: {
            Labels,
        },
    })

    export default class Modal extends Vue {
        @Prop({ required: true }) private id!: number;

        private closeModal() {
            EventBus.$emit('close-modal');
        }

        private get modal() {
            const item: IItem = this.$store.getters.getItem(this.id);
            return item;
        }

        private get column() {
            const { columnId } = this.modal;
            const column: IColumn = this.$store.getters.getColumn(columnId);
            return column;
        }
    }
</script>

<style>

</style>
