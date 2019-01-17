<template>
    <div class="column">
        <div class="column__header">

            <icon-base
                viewBox="0 0 512 512"
                class="column__circle"
                :class="{
                    blue: state === 'active',
                    yellow: state === 'warning',
                    red: state === 'danger' }">

                <icon-circle />
            </icon-base>

            <slot class="column__title" />

            <icon-base
                viewBox="0 0 60 60"
                class="column__btn"
                @click="columnDropdown = true">

                <icon-dots />
            </icon-base>

            <Dropdown
                v-if="columnDropdown"
                type="column"
                @close-dropdown="columnDropdown = false"
                @delete-column="deleteColumn" />
        </div>

        <Item
            class="add-item-item"
            v-for="item in getItems"
            :key="item.id"
            :itemId="item.id"
            :columnId="columnId">

            <p class="item__input">{{ item.title }}</p>
        </Item>

        <div
            class="column__add-item"
            key="addButton"
            @click="addItem">

            <p>Add Card</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, State } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import Dropdown from '@components/Dropdown.vue';
    import Item from '@components/items/Item.vue';
    import { IconBase, IconCircle, IconDots } from '@components/icons';

    import { ColumnState, ItemState } from '@state/state';
    import { IItem, IColumn } from '@models/index';

    @Component({
        components: {
            Dropdown,
            Item,
            IconBase,
            IconCircle,
            IconDots,
        },
    })

    export default class Column extends Vue {
        @Prop() private columnId!: number;
        @Prop() private state!: string;

        @State('columns') private columns!: ColumnState;
        @State('items') private items!: ItemState;

        private columnDropdown = false;

        private get column() {
            const { columns } = this.columns;
            return columns.find((column: IColumn) => column.id === this.columnId);
        }

        private get getItems() {
            const { items } = this.items;
            return items.filter((item: IItem) => this.columnId === item.columnId);
        }

        private addItem() {
            const newItem: IItem = {
                title: 'Item',
                columnId: this.columnId,
                colorLabels: [],
            };

            this.$store.dispatch('createItem', newItem);
        }

        private deleteColumn() {
            this.$store.dispatch('deleteColumn', this.columnId);
        }
    }
</script>
