<template>
    <div class="board-header">
        <div class="board-header__left">
            <div
                class="board-header__square"
                :style="{ background: squareColor }" />

            <div class="board-header__info">
                <p class="board-header__title">{{ boardHeader.title }}</p>
                <p class="board-header__board-owner">Personal</p>
            </div>

            <div class="board-header__visible">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    class="board-header__eye">

                    <path d="m64.7 36.3c-28.4 0-55.9 27.1-57 28.3-0.8 0.8-1.2 1.8-1.2 2.9s0.4 2.1 1.2 2.9c1.2 1.2 28.6 28.3 57 28.3s55.9-27.1 57-28.3c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.1-1.2-2.9c-1.1-1.2-28.5-28.3-57-28.3zm0 54.1c-19.9 0-40.4-16.2-48.1-23 7.7-6.8 28.2-23 48.1-23s40.4 16.2 48.1 23c-7.7 6.8-28.2 23-48.1 23z"/>
                    <path d="m50 67.4c0 8.1 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8-6.6-14.8-14.8-14.8-14.8 6.7-14.8 14.8zm21.3 0c0 3.6-2.9 6.6-6.6 6.6-3.6 0-6.6-2.9-6.6-6.6s2.9-6.6 6.6-6.6c3.6 0.1 6.6 3 6.6 6.6z"/>
                </svg>

                <p class="board-header__text">Private</p>
            </div>
        </div>

        <div class="board-header__right">
            <div
                class="button border-radius-left"
                :class="{ active: currentView === BoardView.Board }"
                @click="changeCurrentView(BoardView.Board)"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 385 385"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Board }"
                    >

                    <path d="M12 120.3h360.9c6.6 0 12-5.4 12-12 0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12C0 114.9 5.4 120.3 12 120.3z"/>
                    <path d="M372.9 180.5H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h360.9c6.6 0 12-5.4 12-12S379.6 180.5 372.9 180.5z"/>
                    <path d="M372.9 264.7H132.3c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12h240.6c6.6 0 12-5.4 12-12C385 270.1 379.6 264.7 372.9 264.7z"/>
                </svg>

                Boards
            </div>

            <div
                class="button border-radius-right"
                :class="{ active: currentView === BoardView.Calendar }"
                @click="changeCurrentView(BoardView.Calendar)"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.6 511.6"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Calendar }"
                    >

                    <path d="M482.5 83.9c-7.2-7.2-15.8-10.8-25.7-10.8h-36.5v-27.4c0-12.6-4.5-23.3-13.4-32.3C397.9 4.5 387.2 0 374.6 0h-18.3c-12.6 0-23.3 4.5-32.3 13.4 -8.9 8.9-13.4 19.7-13.4 32.3v27.4h-109.6v-27.4c0-12.6-4.5-23.3-13.4-32.3C178.6 4.5 167.9 0 155.3 0H137.1c-12.6 0-23.3 4.5-32.3 13.4 -8.9 8.9-13.4 19.7-13.4 32.3v27.4H54.8c-9.9 0-18.5 3.6-25.7 10.9 -7.2 7.2-10.8 15.8-10.8 25.7v365.5c0 9.9 3.6 18.5 10.9 25.7 7.2 7.2 15.8 10.8 25.7 10.8h402c9.9 0 18.5-3.6 25.7-10.8 7.2-7.2 10.9-15.8 10.9-25.7V109.6C493.4 99.7 489.7 91.2 482.5 83.9zM137 475.1H54.8v-82.2h82.2V475.1zM137 374.6H54.8v-91.4h82.2V374.6zM137 265H54.8v-82.2h82.2V265zM130.6 134.3c-1.8-1.8-2.7-3.9-2.7-6.4V45.7c0-2.5 0.9-4.6 2.7-6.4 1.8-1.8 3.9-2.7 6.4-2.7h18.3c2.5 0 4.6 0.9 6.4 2.7 1.8 1.8 2.7 3.9 2.7 6.4v82.2c0 2.5-0.9 4.6-2.7 6.4 -1.8 1.8-3.9 2.7-6.4 2.7H137.1C134.6 137 132.4 136.1 130.6 134.3zM246.7 475.1h-91.4v-82.2h91.4V475.1zM246.7 374.6h-91.4v-91.4h91.4V374.6zM246.7 265h-91.4v-82.2h91.4V265zM356.3 475.1h-91.4v-82.2h91.4V475.1zM356.3 374.6h-91.4v-91.4h91.4V374.6zM356.3 265h-91.4v-82.2h91.4V265zM349.9 134.3c-1.8-1.8-2.7-3.9-2.7-6.4V45.7c0-2.5 0.9-4.6 2.7-6.4 1.8-1.8 3.9-2.7 6.4-2.7h18.3c2.5 0 4.6 0.9 6.4 2.7 1.8 1.8 2.7 3.9 2.7 6.4v82.2c0 2.5-0.9 4.6-2.7 6.4 -1.8 1.8-3.9 2.7-6.4 2.7h-18.3C353.8 137 351.7 136.1 349.9 134.3zM456.8 475.1h-82.2v-82.2h82.2V475.1zM456.8 374.6h-82.2v-91.4h82.2V374.6zM456.8 265h-82.2v-82.2h82.2V265z"/>
                </svg>

                Calendar
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';

    import { BoardView } from '@enums/index';
    import { Colors } from '@/utils/index';
    import { IBoard } from '@/data/models';

    @Component({})

    export default class BoardHeader extends Vue {
        private BoardView: any = BoardView;

        @Getter('getCurrentView') private currentView!: BoardView;

        @Prop() private boardHeader!: IBoard;

        private boxShadow = `0 .5rem 3rem .1rem`;

        private get squareColor() {
            const colors = new Colors();
            return colors.setColor(parseFloat(this.boardHeader.color));
        }

        private changeCurrentView(newView: BoardView) {
            this.$emit('change-view', newView);
        }
    }
</script>
