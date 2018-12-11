<template>
    <div class="modal-item">
        <div class="modal-item__title">
            <div class="modal-item__icon">
                <icon-base view-box="0 0 60 60" class="modal-item-icon">
                    <icon-folder />
                </icon-base>
            </div>

            <div class="modal-item__content">
                <input
                    type="text"
                    class="modal-item__input"
                    :placeholder="modal.title">

                <p class="modal-item__sub-title">
                    In list <span class="modal-item__list-name">{{ column.title }}</span>
                </p>
            </div>
        </div>

        <div class="modal-item__labels">
            <div class="modal-item__icon">
                <icon-base view-box="0 0 60 60" class="modal-icon">
                    <icon-label />
                </icon-base>
            </div>

            <div class="modal-item__content">
                <p class="modal-item__title">Labels</p>
                <Labels :labels="modal.colorLabels"/>
            </div>
        </div>

        <div class="modal-item__description">
            <div class="modal-item__icon">
                <icon-base view-box="0 0 22.9 22.9" class="modal-icon">
                    <icon-description />
                </icon-base>
            </div>

            <div class="modal-item__content">
                Description
            </div>
        </div>

        <div class="modal-item__comments">
            <div class="modal-item__icon">
                <icon-base view-box="0 0 33 33" class="modal-icon">
                    <icon-comments />
                </icon-base>
            </div>

            <div class="modal-item__content">
                Comments
            </div>
        </div>

        <div class="modal-item__activity">
            <div class="modal-item__icon">
                <icon-base view-box="0 0 489.7 489.7" class="modal-icon">
                    <icon-activity />
                </icon-base>
            </div>

            <div class="modal-item__content">
                Activity
            </div>
        </div>

        <div class="modal-item__card-actions">Card Actions</div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import Labels from '@components/modal/Labels.vue';
    import {
        IconActivity,
        IconBase,
        IconClose,
        IconComments,
        IconDescription,
        IconFolder,
        IconLabel,
    } from '@components/icons';

    import { IItem, IColumn } from '@models/index';
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
