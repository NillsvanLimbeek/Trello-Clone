<template>
    <div class="item">
        <div class="item__header">
            <slot class="item__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Mutation, Action } from 'vuex-class';

    import Dropdown from './Dropdown.vue';

    @Component({
        components: {
            Dropdown,
        },
    })

    export default class Item extends Vue {
        // props
        @Prop(Number) private itemId!: number;
        @Prop(Number) private columnId!: number;

        // state

        // data
        private itemDropdown = false;

        // methods
        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        private deleteElement() {
            this.$store.dispatch('deleteElements', { type: 'item', id: this.itemId });
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/item';

</style>
