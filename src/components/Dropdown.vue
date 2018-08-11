<template>
    <div
        class="dropdown"
        :class="{ 'position-column': type === 'column', 'position-item': type === 'item' }">

        <i class="fas fa-caret-up dropdown__arrow"></i>
        <div class="dropdown__body" @mouseleave="close">
            <p
                class="dropdown__item"
                @click="globalDelete">
                <i class="dropdown__icon fas fa-trash"/>
                Delete
            </p>

            <p class="dropdown__item">
                <i class="dropdown__icon fas fa-copy"/>
                Copy
            </p>
        </div>
    </div>

</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

    @Component({})

    export default class Dropdown extends Vue {
        // props
        @Prop(String) private type!: string;

        @Emit() private close() {}
        @Emit() private globalDelete() {}
    }

</script>

<style lang="scss">

    @import '../assets/scss/components/dropdown';

</style>
