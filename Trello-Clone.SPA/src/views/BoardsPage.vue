<template>
    <div>
        <BoardItem
            v-for="board in boards"
            :key="board.id"
            :board="board"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, State, Getter } from '@/vue-script';

    import { IBoard } from '@models/index';

    import BoardItem from '@components/boards/BoardItem.vue';

    @Component({
        components: {
            BoardItem,
        },
    })

    export default class BoardsPage extends Vue {
        @Getter('getBoards') private boards!: IBoard[];

        private created() {
            this.$store.dispatch('fetchBoards');
        }
    }

</script>