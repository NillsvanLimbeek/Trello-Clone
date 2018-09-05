<template>
    <div class="board-header">
        <div class="board-header__svg" :style="{ background: board.color, boxShadow: boxShadow + board.color }">
            <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 459 459"
                class="board-header__square"
                :style="{ fill: board.color, boxShadow: boxShadow + board.color }">

                <path d="M408 0H51C23 0 0 23 0 51v357c0 28.1 23 51 51 51h357c28.1 0 51-22.9 51-51V51C459 23 436.1 0 408 0z"/> -->
            </svg>
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

<style lang="scss">

    @import './src/assets/scss/components/board-header';

</style>
