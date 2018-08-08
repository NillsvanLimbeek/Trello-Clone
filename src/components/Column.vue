<template>
    <div class="column">
        <div class="column__header">
            <slot class="column__title"></slot>
            <i class="column__dropdown-btn fas fa-ellipsis-v" @click="openDropdown"></i>

            <transition name="fade">
                <Dropdown
                    v-if="columnDropdown"
                    type="column"
                    @global-delete="deleteColumn"/>
            </transition>
        </div>

        <Item v-for="item in filterItems"
              :key="item.id"
              :itemId="item.id"
              :columnId="columnId">
            <input class="item__input" v-model="item.title">
        </Item>

        <div class="column__add-item"
             @click="addItem">
            <i class="fa fa-plus column__icon"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';

    import Dropdown from './Dropdown.vue';
    import Item from './Item.vue';

    import { ItemState, IItem } from '@/store/types';

    @Component({
        components: {
            Item,
            Dropdown,
        },
    })

    export default class Column extends Vue {
        // props
        @Prop([String, Number]) private columnId!: string | number;

        // state
        @State('items') private items!: ItemState;

        // data
        private columnDropdown = false;

        // computed
        private get filterItems() {
            const { items } = this.items;
            const column = this.columnId;

            return items.filter((item: IItem) => column === item.columnId);
        }

        // methods
        private openDropdown() {
            this.columnDropdown = !this.columnDropdown;
        }

        private randomId() {
            return Math.ceil(Math.random() * 100);
        }

        private addItem() {
            const newItem: IItem = {
                title: 'Item',
                columnId: this.columnId,
                id: `item${this.randomId()}`,
                cardIds: [],
            };

            this.$store.dispatch('addItem', newItem);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/column';

</style>
