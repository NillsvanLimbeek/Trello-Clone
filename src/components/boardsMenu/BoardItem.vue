<template>
        <div
            class="board-item"
            @mouseover="hideActions = true"
            @mouseleave="hideActions = false">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 459 459"
                class="board-item__square"
                :style="{ fill: board.color }">

                <path d="M408 0H51C23 0 0 23 0 51v357c0 28.1 23 51 51 51h357c28.1 0 51-22.9 51-51V51C459 23 436.1 0 408 0z"/>
            </svg>

            <p class="board-item__title">{{ board.title }}</p>

            <div
                class="board-item__actions"
                :class="{ hide: !hideActions }">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 486.4 486.4"
                    class="board-item__thrash">

                    <path d="M446 70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5 0-53.5 24-53.5 53.5V70H40.4c-7.5 0-13.5 6-13.5 13.5S32.9 97 40.4 97h24.4v317.2c0 39.8 32.4 72.2 72.2 72.2h212.4c39.8 0 72.2-32.4 72.2-72.2V97H446c7.5 0 13.5-6 13.5-13.5S453.5 70 446 70zM168.6 53.5c0-14.6 11.9-26.5 26.5-26.5h96.2c14.6 0 26.5 11.9 26.5 26.5V70H168.6V53.5zM394.6 414.2c0 24.9-20.3 45.2-45.2 45.2H137c-24.9 0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z"/>
                    <path d="M243.2 411c7.5 0 13.5-6 13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v238.5C229.7 404.9 235.7 411 243.2 411z"/>
                    <path d="M155.1 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9C141.6 390.1 147.7 396.1 155.1 396.1z"/>
                    <path d="M331.3 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9C317.8 390.1 323.8 396.1 331.3 396.1z"/>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 487.2 487.2"
                    class="board-item__star">

                    <path d="M486.6 186.8c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6 -68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0 0c-5.1 0-9.8 2.9-12.1 7.6l-67.5 137.9 -152 22.6c-5.1 0.8-9.3 4.3-10.9 9.2s-0.2 10.3 3.5 13.8l110.3 106.9 -25.5 151.4c-0.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-0.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5l0 0c7.4 0 13.5-6.1 13.5-13.5 0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5 109.6-107.5C486.9 197.1 488.2 191.7 486.6 186.8zM349.6 293.9c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3 -118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-0.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8L349.6 293.9z"/>
                </svg>

            </div>
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    import { IBoard } from '@/data/models/types';

    @Component({})

    export default class BoardItem extends Vue {
        // props
        @Prop() private board!: IBoard;

        // data
        private hideActions = false;
    }
</script>

<style lang="scss">

    @import '../../assets/scss/components/board-item';

</style>
