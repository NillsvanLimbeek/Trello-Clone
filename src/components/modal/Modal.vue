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

                <div class="modal__title">
                    <div class="modal__icon">
                        <icon-base view-box="0 0 60 60" class="modal-icon">
                            <icon-folder />
                        </icon-base>
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
                        <icon-base view-box="0 0 60 60" class="modal-icon">
                            <icon-label />
                        </icon-base>
                    </div>

                    <div class="modal__content">
                        <p class="modal__title">Labels</p>
                        <Labels :labels="modal.colorLabels"/>
                    </div>
                </div>

                <div class="modal__description">
                    <div class="modal__icon">
                        <icon-base view-box="0 0 22.9 22.9" class="modal-icon">
                            <icon-description />
                        </icon-base>
                    </div>

                    <div class="modal__content">
                        Description
                    </div>
                </div>

                <div class="modal__comments">
                    <div class="modal__icon">
                        <icon-base view-box="0 0 33 33" class="modal-icon">
                            <icon-comments />
                        </icon-base>
                    </div>

                    <div class="modal__content">
                        Comments
                    </div>
                </div>

                <div class="modal__activity">
                    <div class="modal__icon">
                        <icon-base view-box="0 0 489.7 489.7" class="modal-icon">
                            <icon-activity />
                        </icon-base>
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
    import {
        IconActivity,
        IconBase,
        IconClose,
        IconComments,
        IconDescription,
        IconFolder,
        IconLabel,
    } from '@components/icons';

    import { IItem, IColumn } from '@data/models/types';
    import { EventBus } from '@/eventBus';

    @Component({
        components: {
            Labels,
            IconActivity,
            IconBase,
            IconClose,
            IconComments,
            IconDescription,
            IconFolder,
            IconLabel,
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
