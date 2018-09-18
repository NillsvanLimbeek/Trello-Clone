<template>
    <div
        class="color-label"
        :class="{
            'label-green': label === 1,
            'label-yellow': label === 2,
            'label-orange': label === 3,
            'label-red': label === 4,
            'label-purple': label === 5,
            'label-blue': label === 6
        }"
    />
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State } from 'vuex-class';

    import { IItem } from '@/data/models/types';

    @Component({})

    export default class CardColorLabel extends Vue {
        // props
        @Prop() private label!: number;
    }
</script>
