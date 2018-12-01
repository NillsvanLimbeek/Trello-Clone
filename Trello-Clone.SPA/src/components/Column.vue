<template>
    <div class="column">
        <div class="column__header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="column__circle"
                :class="{
                    blue: state === 'active',
                    yellow: state === 'warning',
                    red: state === 'danger' }">

                <path class="st0" d="M256,6C117.9,6,6,117.9,6,256s111.9,250,250,250s250-111.9,250-250S394.1,6,256,6z M256,414.1
			c-87.2,0-158.1-70.7-158.1-158.1c0-87.2,70.7-158.1,158.1-158.1S414.1,168.8,414.1,256S343.2,414.1,256,414.1z"/>
            </svg>

            <slot class="column__title" />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                class="column__btn"
                @click="openDropdown">

                <path d="M8 22c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8S12.4 22 8 22z"/>
                <path d="M52 22c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8S56.4 22 52 22z"/>
                <path d="M30 22c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8S34.4 22 30 22z"/>
            </svg>

            <transition name="fade">
                <Dropdown
                    v-if="columnDropdown"
                    type="column"
                />
            </transition>
        </div>

        <transition-group
            name="add-item"
            tag="div">

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
        </transition-group>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, State } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import Dropdown from '@components/Dropdown.vue';
    import Item from '@components/Item.vue';

    import { ItemState } from '@state/state';
    import { IItem, IColumn } from '@models/index';

    @Component({
        components: {
            Dropdown,
            Item,
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
            this.$emit('add-item', this.columnId);
        }
    }
</script>
