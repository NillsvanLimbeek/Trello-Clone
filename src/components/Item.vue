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

<script>
    import { mapState } from 'vuex'

    import Dropdown from './Dropdown.vue'
    import Card from './Card.vue'

    export default {
        props: {
            itemId: {
                required: true,
                type: [String, Number]
            },
            columnId: {
                required: true,
                type: [String, Number]
            }
        },
        data() {
            return {
                itemDropdown: false
            }
        },
        computed: {
            ...mapState([
                'cards'
            ]),
            filterCards() {
                const cards = this.cards
                const item = this.itemId

                return cards.filter(card => item === card.itemId)
            }
        },
        methods: {
            addCard() {
                const randomId = this.randomId()

                this.$store.commit('addCard', {
                    title: 'Card',
                    itemId: this.itemId,
                    columnId: this.columnId,
                    id: `card${randomId}`,
                    cardIds: []
                })
            },
            deleteItem() {
                this.$store.dispatch('deleteElement', { type: 'item', id: this.itemId })
            },
            randomId() {
                return Math.ceil(Math.random() * 100)
            },
            openDropdown() {
                this.itemDropdown = !this.itemDropdown
            }
        },
        components: {
            Card,
            Dropdown
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/item';

</style>
