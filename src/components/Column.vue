<template>
    <div class="column">
        <div class="column__header">
            <slot class="column__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"></i>

            <transition name="fade">
                <Dropdown
                    v-if="showDropdown"/>
            </transition>
        </div>

        <Item v-for="item in filterItems"
              :key="item.id"
              :itemId="item.id">
            <input class="item__input" v-model="item.title">
        </Item>

        <div class="column__add-item"
             @click="addItem">
            <i class="fa fa-plus column__icon"></i>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import Item from './Item.vue'
    import Dropdown from './Dropdown.vue'

    export default {
        data() {
            return {
                showDropdown: false
            }
        },
        methods: {
            addItem() {
                this.$store.commit('addItem', { title: 'Item', columnId: this.columnId, id: this.items.length + 1 })
            },
            openDropdown() {
                this.showDropdown = !this.showDropdown
            }
        },
        computed: {
            ...mapState([
                'items'
            ]),
            filterItems() {
                // eslint-disable-next-line
                const items = this.items
                const column = this.columnId

                return items.filter(item => column === item.columnId)
            }
        },
        components: {
            Item,
            Dropdown
        },
        props: [
            'columnId'
        ]
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/column';

</style>
