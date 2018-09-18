<template>
    <div class="item">

        <div
            class="item__labels"
            v-if="getColorlabels.length >= 1">

            <CardColorLabel
                v-for="label in getColorlabels"
                :key="label.id"
                :label="label"
                />
        </div>

        <div class="item__header">
            <slot class="item__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"/>
        </div>

        <div
            class="item__attachments"
            v-if="getAttachment > 0">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.5 268.5"
                class="item__paperclip">

                <path d="M205.8 161.1V80.5C205.8 33.9 175.7 0 134.2 0 92.7 0 62.6 33.9 62.6 80.5l0 116.5v4.5c0 7.4 6 13.4 13.4 13.4 7.4 0 13.4-6 13.4-13.4V80.7c0-25.9 13.4-53.8 44.7-53.8s44.8 28 44.8 53.8v107.4c0 1 0.1 1.9 0.4 2.9l-0.4 24c0 14.8-12.1 26.7-26.9 26.7 -14.8 0-26.9-12-26.9-26.8v-53.7l0.1-53.6c0-3.7 2.5-8.9 9-8.9 5.9 0 8.9 5.1 8.9 8.9v26.8c0 1.2 0 2.4 0.1 3.4 0 0.3-0.1 0.7-0.1 1v17.9c0 7.4 6 13.4 13.4 13.4 7.4 0 13.4-6 13.4-13.4v-17.9c0-0.4-0.1-0.8-0.1-1.2 0.1-1 0.1-2.1 0.1-3.2v-26.8c0-19.4-16-35.8-35.8-35.8 -19.8 0-35.8 15.6-35.8 35.8l0 12.4c0 0.3-0.1 0.6-0.1 0.9v94c0 29.6 24.1 53.7 53.7 53.7 29.6 0 53.8-24 53.8-53.6L205.8 161.1z"/>
            </svg>

            <p class="item__attachments-number">{{ getAttachment }}</p>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Getter } from 'vuex-class';
    import { ItemState } from '@/store/state/state';
    import { IItem } from '@/data/models/types';

    import Dropdown from './Dropdown.vue';
    import CardColorLabel from './CardColorLabel.vue';

    @Component({
        components: {
            Dropdown,
            CardColorLabel,
        },
    })

    export default class Item extends Vue {
        // props
        @Prop(Number) private itemId!: number;

        // state
        @State('items') private items!: ItemState;

        // data
        private itemDropdown = false;

        // methods
        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        private deleteElement() {
            this.$store.dispatch('deleteElements', { type: 'item', id: this.itemId });
        }

        // computed
        private get getColorlabels() {
            const item: IItem = this.$store.getters.getItem(this.itemId);
            return item.colorLabels;
        }

        private get getAttachment() {
            const item: IItem = this.$store.getters.getItem(this.itemId);
            return item.attachment;
        }
    }
</script>
