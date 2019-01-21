<template>
    <div class="board">

        <BoardHeader
            :board-header="board"
            @change-view="changeView"
            @open-board-modal="boardModal = true" />

        <div class="board__board-list">
            <Column
                class="add-column-item"
                v-for="column in columns"
                :key="column.id"
                :columnId="column.id"
                :state="column.state">

                <input
                    class="input"
                    type="text"
                    v-model="column.title"
                    v-focus
                    ref="title">

            </Column>

            <div
                class="board__add-button add-column-item"
                @click="createColumn"
                key="addButton">

                <p>Add List</p>

            </div>
        </div>

        <Modal v-if="itemModal">
            <ModalItem :id="itemId" />
        </Modal>

        <Modal
            v-if="boardModal"
            size="small">

            <ModalEditBoard :id="boardId" />
        </Modal>

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';
    import { Route } from 'vue-router';

    import { EventBus } from '@/eventBus';

    import Column from '@views/Column.vue';
    import BoardHeader from '@components/boards/BoardHeader.vue';
    import Modal from '@components/modal/Modal.vue';
    import ModalItem from '@components/modal/content/ModalItem.vue';
    import ModalEditBoard from '@components/modal/content/ModalEditBoard.vue';

    import { ColumnState, BoardsState } from '@state/state';
    import { IItem, IColumn, IBoard } from '@models/index';
    import { BoardView } from '@enums/index';

    @Component({
        components: {
            Column,
            BoardHeader,
            Modal,
            ModalItem,
            ModalEditBoard,
        },
    })

    export default class Board extends Vue {
        private itemModal = false;
        private boardModal = false;
        private itemId!: number;
        private boardId!: number;
        private boardOjb = {};

        public get columns() {
            return this.$store.getters.getAllColumns(this.boardId);
        }

        private get board() {
            const board = this.$store.getters.getBoard(this.boardId);

            if (!board) {
                return this.boardOjb;
            } else {
                return board;
            }
        }

        private createColumn() {
            const newColumn: IColumn = {
                title: 'Column',
                itemIds: [],
                state: 'inactive',
                boardId: this.boardId,
            };

            this.$store.dispatch('createColumn', newColumn);
        }

        private changeView(newView: BoardView) {
            this.$store.dispatch('setCurrentView', newView);
        }

        private created() {
            this.boardId = parseFloat(this.$route.params.id);

            this.$store.dispatch('fetchBoard', this.boardId)
                .then((response) => {
                    this.boardOjb = response.data;
                    this.$store.dispatch('fetchColumns');
                    this.$store.dispatch('fetchItems');
                });

            EventBus.$on('open-item', (id: number) => {
                this.itemId = id;
                this.itemModal = true;
            });

            EventBus.$on('close-modal', () => {
                this.itemModal = false;
                this.boardModal = false;
            });
        }

        private mounted() {
            const title = this.$refs.title as HTMLFormElement;

            if (title) {
                title.forEach((el: HTMLFormElement) => {
                    el.blur();
                });
            }
        }
    }
</script>

