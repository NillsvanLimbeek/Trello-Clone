<template>
    <div>
        <Board :boards="getBoardIds"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, State } from '@/vue-script';

    import { BoardsState } from '@state/state';

    import Board from '@components/Board.vue';

    @Component({
        components: {
            Board,
        },
    })

    export default class Test extends Vue {
        @State('boards') private boards!: BoardsState;

        // computed
        private get getBoardIds() {
            const { boards } = this.boards;

            return Object.keys(boards);
        }
    }

</script>