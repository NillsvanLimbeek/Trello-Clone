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
    import { State, Mutation, Action } from 'vuex-class';

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
            const  { cards } = this.cards;
            const item = this.itemId;

            return cards.filter((card: ICard) => item === card.itemId);
        }

        // methods
        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        private addCard() {
            const newCard: ICard = {
                title: 'Item',
                columnId: this.columnId,
                itemId: this.itemId,
                id: `item${this.randomId()}`,
            };

            this.$store.dispatch('addCard', newCard);
        }

        private randomId() {
            return Math.ceil(Math.random() * 1000);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/item';

</style>
