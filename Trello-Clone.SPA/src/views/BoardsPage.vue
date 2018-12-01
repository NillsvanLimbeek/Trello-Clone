<template>
    <div>
        <p v-for="board in boards" :key="board.id">{{ board.title }}</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, State, Getter } from '@/vue-script';

    import { IBoard } from '@models/index';

    import Board from '@views/Board.vue';

    @Component({
        components: {
            Board,
        },
    })

    export default class BoardsPage extends Vue {
        @Getter('getBoards') private boards!: IBoard[];

        private created() {
            this.$store.dispatch('fetchBoards');
        }
    }

</script>