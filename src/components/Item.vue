<template>
    <div class="item">
        <div class="item__header">
            <slot class="item__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"/>
        </div>

        <Dropdown
            v-if="itemDropdown"
            type="item"
            @global-delete="deleteItem"
        />

        <div class="item__body">
            <Card
                v-for="card in filterCards"
                :key="card.id"
                :cardId="card.id">

                <p>{{ card.title }}</p>
            </Card>

            <div class="item__button"
                 @click="addCard">
                <i class="fas fa-plus item__icon"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State } from 'vuex-class';

    import { ICard, CardState } from '@/store/types';

    import Dropdown from './Dropdown.vue';
    import Card from './Card.vue';

    @Component({
        components: {
            Dropdown,
            Card,
        },
    })

    export default class Item extends Vue {
        // props
        @Prop([String, Number]) private itemId!: string | number;
        @Prop([String, Number]) private columnId!: string | number;

        // state
        @State('cards') private cards!: CardState;

        // data
        private itemDropdown = false;

        // computed
        private get filterCards() {
            const cards = this.cards.cards;
            const item = this.itemId;

            return cards.filter((card: ICard) => item === card.itemId);
        }

        // methods
        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        addCard() {
            const randomId = this.randomId();

            // this.$store.commit('addCard', {
            //     title: 'Card',
            //     itemId: this.itemId,
            //     columnId: this.columnId,
            //     id: `card${randomId}`,
            //     cardIds: [],
            // } );
        }

        deleteItem() {
            // this.$store.dispatch('deleteElement', { type: 'item', id: this.itemId });
        }

        randomId() {
            return Math.ceil(Math.random() * 100);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/item';

</style>
