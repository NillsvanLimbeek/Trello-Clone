<template>
    <div class="boards-page pa-3">
        <BoardsList
            v-if="favoriteBoards.length > 0"
            title="Favorite Boards"
            :boards="favoriteBoards"
            :add-board="false"
            @show-modal="showModal = true" />

        <BoardsList
            title="All Boards"
            :boards="boards"
            @show-modal="showModal = true" />

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

    import BoardsList from '@components/boards/BoardsList.vue';
    import BoardCard from '@components/boards/BoardCard.vue';
    import Modal from '@components/modal/Modal.vue';
    import ModalNewBoard from '@components/modal/content/ModalNewBoard.vue';

    @Component({
        components: {
            BoardsList,
            BoardCard,
            Modal,
            ModalNewBoard,
        },
    })

    export default class BoardsPage extends Vue {
        @Getter('getBoards') private boards!: IBoard[];
        @Getter('getFavoriteBoards') private favoriteBoards!: IBoard[];

        private showModal = false;

        private createBoard(board: IBoard) {
            this.$store.dispatch('createBoard', board);

            this.showModal = false;
        }

        private created() {
            this.$store.dispatch('fetchBoards');
            this.$store.dispatch('fetchColumns');
            this.$store.dispatch('fetchItems');

            EventBus.$on('close-modal', () => {
                this.showModal = false;
            });

            EventBus.$on('favorite', (board: IBoard) => {
                this.$store.dispatch('updateBoard', board);
            });
        }
    }

</script>