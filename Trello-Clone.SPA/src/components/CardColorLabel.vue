<template>
    <div
        class="color-label"
        :class="{
            'label-green': label === ColorLabel.Green,
            'label-yellow': label === ColorLabel.Yellow,
            'label-orange': label === ColorLabel.Orange,
            'label-red': label === ColorLabel.Red,
            'label-purple': label === ColorLabel.Purple,
            'label-blue': label === ColorLabel.Blue
        }"
    />
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IItem } from '@models/index';
    import { ColorLabel } from '@enums/index';

    @Component({})

    export default class CardColorLabel extends Vue {
        private ColorLabel: any = ColorLabel;

        @Prop() private label!: number;
    }
</script>
