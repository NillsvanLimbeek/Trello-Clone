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

<script>
    import { mapState } from 'vuex';

    import Item from './Item.vue';
    import Dropdown from './Dropdown.vue';

    export default {
        data() {
            return {
                columnDropdown: false,
            };
        },
        methods: {
            addItem() {
                const randomId = this.randomId();

                this.$store.commit('addItem', {
                    title: 'Item',
                    columnId: this.columnId,
                    id: `item${randomId}`,
                    cardIds: [],
                });
            },
            openDropdown() {
                this.columnDropdown = !this.columnDropdown;
            },
            deleteColumn() {
                this.$store.dispatch('deleteElement', this.columnId);
            },
            randomId() {
                return Math.ceil(Math.random() * 100);
            },
        },
        computed: {
            ...mapState([
                'items',
            ]),
            filterItems() {
                const items = this.items;
                const column = this.columnId;

                return items.filter( (item) => column === item.columnId);
            },
        },
        components: {
            Item,
            Dropdown,
        },
        props: {
            columnId: {
                required: true,
                type: [String, Number],
            },
        },
    };
</script>

<style lang="scss">

    @import '../assets/scss/components/column';

</style>
