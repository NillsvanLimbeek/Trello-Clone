<template>
        <div
            class="board-item"
            @mouseover="hideActions = true"
            @mouseleave="hideActions = false">

            <icon-base
                viewBox="0 0 459 459"
                :color="squareColor"
                height="30"
                width="30">

                <icon-square />
            </icon-base>

            <p @click="clickLink">
                {{ board.title }}
            </p>

            <div
                class="board-item__actions"
                :class="{ hide: !hideActions }">

                <icon-base
                    viewBox="0 0 486.4 486.4"
                    height="17.5"
                    width="17.5">

                    <icon-thrash />
                </icon-base>

                <icon-base
                    v-if="board.favorite"
                    viewBox="0 0 490.7 490.7"
                    size="17.5">

                    <icon-star />
                </icon-base>
            </div>
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IconBase, IconSquare, IconThrash, IconStar, IconStarSolid } from '@components/icons';

    import { IBoard } from '@models/index';
    import { SquareColors } from '@enums/index';
    import { Colors } from '@/utils/index';

    @Component({
        components: {
            IconBase,
            IconSquare,
            IconThrash,
            IconStar,
            IconStarSolid,
        },
    })
    export default class BoardItem extends Vue {
        @Prop() private board!: IBoard;

        private SquareColors: any = SquareColors;

        private hideActions = false;

        private get squareColor() {
            const colors = new Colors();
            return colors.setColor(this.board.color);
        }

        private clickLink() {
            const boardId = this.board.id;

            this.$router.push({ name: 'board', params: { id: boardId.toString() }});
            this.$store.commit('closeSidebar', 'boardsMenu');
        }
    }
</script>
