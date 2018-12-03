<template>
        <div
            class="board-item"
            @mouseover="hideActions = true"
            @mouseleave="hideActions = false">

            <IconBase
                viewBox="0 0 459 459"
                :color="squareColor"
                height="30"
                width="30">

                <IconSquare />
            </IconBase>

            <p @click="clickLink">
                {{ board.title }}
            </p>

            <div
                class="board-item__actions"
                :class="{ hide: !hideActions }">

                <IconBase
                    viewBox="0 0 486.4 486.4"
                    height="17.5"
                    width="17.5">

                    <IconThrash/>
                </IconBase>

                <IconBase
                    viewBox="0 0 487.2 487.2"
                    height="17.5"
                    width="17.5">

                    <IconStar />
                </IconBase>

            </div>
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IconBase, IconSquare, IconThrash, IconStar } from '@components/icons';

    import { IBoard } from '@models/index';
    import { SquareColors } from '@enums/index';

    @Component({
        components: {
            IconBase,
            IconSquare,
            IconThrash,
            IconStar,
        },
    })
    export default class BoardItem extends Vue {
        @Prop() private board!: IBoard;

        private SquareColors: any = SquareColors;

        private hideActions = false;

        private get squareColor() {
            switch (parseFloat(this.board.color)) {
                case SquareColors.Green:
                    return '#61bd4f';
                case SquareColors.Yellow:
                    return '#f2d600';
                case SquareColors.Orange:
                    return '#ff9f1a';
                case SquareColors.Red:
                    return '#eb5a46';
                case SquareColors.Purple:
                    return '#c377e0';
                case SquareColors.Blue:
                    return '#0079bf';
                case SquareColors.LightBlue:
                    return '#5BC0EB';
                case SquareColors.LightGreen:
                    return '#06D6A0';
                case SquareColors.Pink:
                    return '#F0A6CA';
                case SquareColors.BrightPink:
                    return '#e438aa';
            }
        }

        private clickLink() {
            const boardId = this.board.id;

            this.$router.push({ name: 'board', params: { id: boardId.toString() }});
            this.$store.commit('closeSidebar', 'boardsMenu');
        }
    }
</script>
