<template>
    <div
        class="board-card"
        @click="clickLink"
        :style="{ background: cardColor }">

        <p class="board-card__title">
            {{ board.title }}
        </p>

        <div class="board-card__actions">
            <icon-base
                @click="$emit('click')"
                viewBox="0 0 487.2 487.2"
                class="board-card__star">

                <icon-star />
            </icon-base>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IBoard } from '@/data/models';
    import { Colors } from '@utils/index';
    import { IconBase, IconStar, IconThrash } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconStar,
        },
    })

    export default class BoardCard extends Vue {
        @Prop({ required: true }) private board!: IBoard;

        private get cardColor() {
            const color = new Colors();
            return color.setColor(this.board.color);
        }

        private clickLink() {
            const boardId = this.board.id;
            this.$router.push({ name: 'board', params: { id: boardId.toString() }});
        }
    }
</script>