<template>
    <div class="board-card">
        <IconBase
            class="mr-1"
            viewBox="0 0 459 459"
            height="30"
            width="30">

            <IconSquare />
        </IconBase>

        <p>{{ board.title }}</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IconBase, IconSquare } from '@components/icons';

    import { IBoard } from '@models/index';

    @Component({
        components: {
            IconBase,
            IconSquare,
        },
    })
    export default class BoardCard extends Vue {
        @Prop() private board!: IBoard;
    }
</script>
