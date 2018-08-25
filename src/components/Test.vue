<template>
    <div>
        <Board :boards="getBoardIds"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { State } from 'vuex-class';

    import { BoardsState } from '@/store/state/state';

    import Board from '@/components/Board.vue';

    @Component({
        components: {
            Board,
        },
    })

    export default class Test extends Vue {
        // state
        @State('boards') private boards!: BoardsState;

        // computed
        private get getBoardIds() {
            const { boards } = this.boards;

            return Object.keys(boards);
        }
    }

</script>

<style>

</style>
