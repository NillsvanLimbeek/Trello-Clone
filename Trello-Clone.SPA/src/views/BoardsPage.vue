<template>
    <div class="boards-page pa-3">
        <BoardCard
            v-for="board in boards"
            :key="board.id"
            :board="board"
        />

        <div class="board-card board-card__add">
            Add Card
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, State, Getter } from '@/vue-script';

    import { IBoard } from '@models/index';

    import BoardCard from '@components/boards/BoardCard.vue';

    @Component({
        components: {
            BoardCard,
        },
    })

    export default class BoardsPage extends Vue {
        @Getter('getBoards') private boards!: IBoard[];

        // private created() {
        //     this.$store.dispatch('fetchBoards');
        // }
    }

</script>