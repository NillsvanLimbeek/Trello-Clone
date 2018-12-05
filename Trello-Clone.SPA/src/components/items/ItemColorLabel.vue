<template>
    <div class="color-label" :style="{ background: squareColor }" />
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IItem } from '@models/index';
    import { ColorLabel } from '@enums/index';
    import { Colors } from '@/utils/index';

    @Component({})

    export default class CardColorLabel extends Vue {
        private ColorLabel: any = ColorLabel;

        @Prop() private label!: number;

        private get squareColor() {
            const colors = new Colors();
            return colors.setColor(this.label);
        }
    }
</script>
