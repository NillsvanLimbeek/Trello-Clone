<template>
    <div
        class="board-card"
        @click="clickLink"
        :style="{ background: `${cardColor}` }">

        <p class="board-card__title">
            {{ board.title }}
        </p>

        <icon-base
            v-if="!board.favorite"
            viewBox="0 0 487.2 487.2"
            class="board-card__star"
            @click="makeFavorite">

            <icon-star />
        </icon-base>

        <icon-base
            v-else
            viewBox="0 0 49.9 49.9"
            size="17.5"
            class="board-card__star"
            @click="makeFavorite">

            <icon-star-solid />
        </icon-base>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import { IBoard } from '@/data/models';
    import { Colors } from '@utils/index';
    import { IconBase, IconStar, IconStarSolid } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconStar,
            IconStarSolid,
        },
    })

    export default class BoardCard extends Vue {
        @Prop({ required: true }) private board!: IBoard;

        private get cardColor() {
            const color = new Colors();
            return color.setColor(this.board.color);
        }

        private clickLink(e: Event) {
            const target = e.target as Element;

            if (target.className === 'board-card') {
                const boardId = this.board.id;
                this.$router.push({ name: 'board', params: { id: boardId.toString() }});
            }
        }

        private makeFavorite() {
            this.board.favorite = !this.board.favorite;
            EventBus.$emit('favorite', this.board);
        }
    }
</script>