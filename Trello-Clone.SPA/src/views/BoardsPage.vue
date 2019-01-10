<template>
    <div class="boards-page pa-3">
        <BoardCard
            v-for="board in boards"
            :key="board.id"
            :board="board"
            @favorite="makeFavorite($event)"
        />

        <div
            class="board-card board-card__add"
            @click="showModal = true">
            Add Board
        </div>

        <Modal
            v-if="showModal"
            size="small">

            <ModalNewBoard @create-board="createBoard($event)" />
        </Modal>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, State, Getter } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import { IBoard } from '@models/index';
    import { BoardToCreateDto } from '@/data/dto';

    import BoardCard from '@components/boards/BoardCard.vue';
    import Modal from '@components/modal/Modal.vue';
    import ModalNewBoard from '@components/modal/content/ModalNewBoard.vue';

    @Component({
        components: {
            BoardCard,
            Modal,
            ModalNewBoard,
        },
    })

    export default class BoardsPage extends Vue {
        @Getter('getBoards') private boards!: IBoard[];

        private showModal = false;

        private createBoard(payload: BoardToCreateDto) {
            this.$store.dispatch('createBoard', payload);

            this.showModal = false;
        }

        private makeFavorite(board: IBoard) {
            board.favorite = true;

            this.$store.dispatch('updateBoard', board);
        }

        private created() {
            this.$store.dispatch('fetchBoards');
            this.$store.dispatch('fetchColumns');
            this.$store.dispatch('fetchItems');

            EventBus.$on('close-modal', () => {
                this.showModal = false;
            });
        }
    }

</script>