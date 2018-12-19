<template>
    <div class="boards-page pa-3">
        <BoardCard
            v-for="board in boards"
            :key="board.id"
            :board="board"
        />

        <div
            class="board-card board-card__add"
            @click="showModal = true">
            Add Card
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

        private created() {
            this.$store.dispatch('fetchBoards');

            EventBus.$on('close-modal', () => {
                this.showModal = false;
            });
        }
    }

</script>