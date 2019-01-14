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
                @click="openDropdown">

                <icon-dots />
            </icon-base>

            <transition name="fade">
                <Dropdown
                    v-if="columnDropdown"
                    type="column"
                />
            </transition>
        </div>

        <Item
            class="add-item-item"
            v-for="item in filterItems"
            :key="item.id"
            :itemId="item.id"
            :columnId="columnId">

            <p class="item__input">{{ item.title }}</p>
        </Item>

        <div
            class="column__add-item add-item-item"
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

    import { ItemState } from '@state/state';
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

        @State('items') private items!: ItemState;

        private columnDropdown = false;

        private get filterItems() {
            const { items } = this.items;
            const column = this.columnId;

            return items.filter((item: IItem) => column === item.columnId);
        }

        private openDropdown() {
            this.columnDropdown = !this.columnDropdown;
        }

        private addItem() {
            const newItem: IItem = {
                title: 'Item',
                columnId: this.columnId,
                colorLabels: [],
            };

            this.$store.dispatch('createItem', newItem);
            // this.$emit('add-item', this.columnId);
        }
    }
</script>
