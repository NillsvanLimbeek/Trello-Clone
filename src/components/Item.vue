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
