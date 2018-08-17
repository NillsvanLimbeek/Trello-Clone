<template>
    <div class="item">

        <div
            class="item__labels"
            v-if="filterLabels.length >= 1">

            <CardColorLabel
                v-for="label in filterLabels"
                :key="label.id"
                :label="label"
                />
        </div>

        <div class="item__header">
            <slot class="item__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"/>
        </div>

        <div class="item__attachtments">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51.6 51.6"
                class="item__paperclip">

                <path d="M50.1 19.2c-0.4-0.4-1-0.4-1.4 0L21.4 46.5c-2 2-4.7 3.1-7.6 3.1 -2.9 0-5.6-1.1-7.6-3.1s-3.1-4.7-3.1-7.6c0-2.9 1.1-5.6 3.1-7.6L33.6 4.1c2.9-2.9 7.4-2.7 10.6 0.4 3.1 3.1 3.3 7.7 0.4 10.6L19 40.7c-1.4 1.4-3.8 1.4-5.2 0 -1.4-1.4-1.4-3.8 0-5.2l17.4-17.4c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0L12.3 34.1c-2.2 2.2-2.2 5.8 0 8 2.2 2.2 5.8 2.2 8 0l25.6-25.6c3.7-3.7 3.5-9.5-0.4-13.4 -3.9-3.9-9.7-4.1-13.4-0.4L4.9 30c-2.4 2.4-3.7 5.6-3.7 9 0 3.4 1.3 6.6 3.7 9 2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7L50.1 20.6C50.5 20.2 50.5 19.6 50.1 19.2z"/>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Getter } from 'vuex-class';
    import { ItemState } from '@/store/state/state';

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
        @Prop(Number) private columnId!: number;

        // state
        @State('items') private items!: ItemState;

        // data
        private itemDropdown = false;

        // methods
        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        private get filterLabels() {
            const { items } = this.items;
            const item = items.find((item) => item.id === this.itemId);

            return item!.colorLabels;
        }

        private deleteElement() {
            this.$store.dispatch('deleteElements', { type: 'item', id: this.itemId });
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/item';

</style>
