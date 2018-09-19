<template>
    <div class="board-header">
        <div class="board-header__left">
            <div
                class="board-header__svg"
                :style="{
                    background: board.color,
                    boxShadow: boxShadow + board.colorFaded
                    }">
            </div>

            <div class="board-header__info">
                <p class="board-header__title">{{ board.title }}</p>
                <p class="board-header__board-owner">Personal</p>
            </div>

            <div class="board-header__visible">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129 129"
                class="board-header__eye">

                <path d="m64.7 36.3c-28.4 0-55.9 27.1-57 28.3-0.8 0.8-1.2 1.8-1.2 2.9s0.4 2.1 1.2 2.9c1.2 1.2 28.6 28.3 57 28.3s55.9-27.1 57-28.3c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.1-1.2-2.9c-1.1-1.2-28.5-28.3-57-28.3zm0 54.1c-19.9 0-40.4-16.2-48.1-23 7.7-6.8 28.2-23 48.1-23s40.4 16.2 48.1 23c-7.7 6.8-28.2 23-48.1 23z"/>
                <path d="m50 67.4c0 8.1 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8-6.6-14.8-14.8-14.8-14.8 6.7-14.8 14.8zm21.3 0c0 3.6-2.9 6.6-6.6 6.6-3.6 0-6.6-2.9-6.6-6.6s2.9-6.6 6.6-6.6c3.6 0.1 6.6 3 6.6 6.6z"/></svg>

                <p class="board-header__text">Private</p>
            </div>
        </div>

        <div class="board-header__right">
            <div class="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 385 385"
                    class="button__icon">

                    <path d="M12 120.3h360.9c6.6 0 12-5.4 12-12 0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12C0 114.9 5.4 120.3 12 120.3z"/>
                    <path d="M372.9 180.5H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h360.9c6.6 0 12-5.4 12-12S379.6 180.5 372.9 180.5z"/>
                    <path d="M372.9 264.7H132.3c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12h240.6c6.6 0 12-5.4 12-12C385 270.1 379.6 264.7 372.9 264.7z"/>
                </svg>

                <span>Boards</span>
            </div>

            <button class="button">
                Calendar
            </button>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({})

    export default class BoardHeader extends Vue {
        // props
        @Prop() private board!: object;

        // data
        private boxShadow = `0 .5rem 3rem .1rem`;
    }
</script>
