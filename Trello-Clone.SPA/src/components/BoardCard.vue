<template>
    <div class="board-card">

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IBoard } from '@models/index';

    @Component({})
    export default class BoardCard extends Vue {
        @Prop() private board!: IBoard;
    }
</script>
