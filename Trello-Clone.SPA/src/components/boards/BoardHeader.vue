<template>
    <div class="board-header">
        <div class="board-header__left">
            <div
                class="board-header__square"
                :style="{
                    background: squareColor,
                    'box-shadow': `0 .5rem 3rem .1rem ${squareColor}`
                    }"
                />

            <div class="board-header__info">
                <p class="board-header__title">{{ boardHeader.title }}</p>
                <p class="board-header__board-owner">Personal</p>
            </div>

            <div class="board-header__visible">
                <icon-base
                    class="board-header__eye"
                    viewBox="0 0 129 129"
                    size="22.5">

                    <icon-eye />
                </icon-base>

                <p class="board-header__text">Private</p>
            </div>
        </div>

        <div class="board-header__right">
            <div
                class="button border-radius-left"
                :class="{ 'button__active': currentView === BoardView.Board }"
                @click="changeCurrentView(BoardView.Board)">

                <icon-base
                    viewBox="0 0 385 385"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Board }">

                    <icon-boards />
                </icon-base>

                Boards
            </div>

            <div
                class="button border-radius-right"
                :class="{ 'button__active': currentView === BoardView.Calendar }"
                @click="changeCurrentView(BoardView.Calendar)">

                <icon-base
                    viewBox="0 0 511.6 511.6"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Calendar }">

                    <icon-calendar />
                </icon-base>

                Calendar
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';

    import { IconBase, IconEye, IconBoards, IconCalendar } from '@components/icons';

    import { BoardView } from '@enums/index';
    import { Colors } from '@/utils/index';
    import { IBoard } from '@/data/models';

    @Component({
        components: {
            IconBase,
            IconEye,
            IconBoards,
            IconCalendar,
        },
    })

    export default class BoardHeader extends Vue {
        private BoardView: any = BoardView;

        @Getter('getCurrentView') private currentView!: BoardView;

        @Prop() private boardHeader!: IBoard;

        private get squareColor() {
            const colors = new Colors();
            return colors.setColor(this.boardHeader.color);
        }

        private changeCurrentView(newView: BoardView) {
            this.$emit('change-view', newView);
        }
    }
</script>
