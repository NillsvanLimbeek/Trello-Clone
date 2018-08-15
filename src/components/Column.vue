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

                <path class="st0" d="M256 6C117.9 6 6 117.9 6 256s111.9 250 250 250 250-111.9 250-250S394.1 6 256 6zM256 427.6c-94.7 0-171.6-76.8-171.6-171.6 0-94.7 76.8-171.6 171.6-171.6S427.6 161.3 427.6 256 350.7 427.6 256 427.6z"/>
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
                    @global-delete="deleteElement"/>
            </transition>
        </div>

        <Item v-for="item in filterItems"
              :key="item.id"
              :itemId="item.id"
              :columnId="columnId">
            <p class="item__input">{{ item.title }}</p>
        </Item>

        <div class="column__add-item"
             @click="addItem">
            <p>Add Card</p>
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
        @Prop(Number) private columnId!: number;
        @Prop(String) private state!: string;

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

        private addItem() {
            const randomId = this.randomId();

            const newItem: IItem = {
                title: 'Item',
                columnId: this.columnId,
                id: randomId,
                colorLabels: [],
                members: [],
                attachment: [],
            };

            this.$store.dispatch('addItem', newItem);
        }

        private randomId() {
            return Math.ceil(Math.random() * 1000);
        }

        private deleteElement() {
            this.$store.dispatch('deleteElements', { type: 'column', id: this.columnId });
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/column';

</style>
