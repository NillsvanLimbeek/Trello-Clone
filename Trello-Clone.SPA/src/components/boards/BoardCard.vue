<template>
    <div
        class="board-card"
        :style="{ background: cardColor }">

        {{ board.title }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IBoard } from '@/data/models';

    import { Colors } from '@utils/index';

    @Component({})
    export default class BoardCard extends Vue {
        @Prop({ required: true }) private board!: IBoard;

        private get cardColor() {
            const color = new Colors();
            return color.setColor(this.board.color);
        }
    }
</script>