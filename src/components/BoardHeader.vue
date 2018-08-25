<template>
    <div class="board-header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 459 459"
                class="board-header__square"
                :style="{ fill: board.color }">

                <path d="M408 0H51C23 0 0 23 0 51v357c0 28.1 23 51 51 51h357c28.1 0 51-22.9 51-51V51C459 23 436.1 0 408 0z"/>
            </svg>

            <p class="board-header__title">{{ board.title }}</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({})

    export default class BoardHeader extends Vue {
        // props
        @Prop() private board!: object;
    }
</script>

<style lang="scss">

    @import './src/assets/scss/components/board-header';

</style>
