<template>
    <div class="item">

        <CardColorLabel :labels="getColorLabels"/>

        <div class="item__header">
            <slot class="item__title"></slot>
            <i class="fas fa-ellipsis-v" @click="openDropdown"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Getter } from 'vuex-class';

    import Dropdown from './Dropdown.vue';
    import CardColorLabel from './CardColorLabel.vue';

    @Component({
        components: {
            Dropdown,
            CardColorLabel,
        },
    })

    export default class Item extends Vue {
        // props
        @Prop(Number) private itemId!: number;
        @Prop(Number) private columnId!: number;

        // state
        @Getter('getColorLabels') private getColorLabels!: number[];

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
