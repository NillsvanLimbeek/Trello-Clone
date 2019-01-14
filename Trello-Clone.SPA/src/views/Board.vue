<template>
    <div class="board">

        <BoardHeader
            :board-header="getBoardHeader"
            @change-view="changeView" />

        <div class="board__board-list">
            <Column
                class="add-column-item"
                v-for="column in getAllColumns"
                :key="column.id"
                :columnId="column.id"
                :state="column.state">

                <input class="column__input" type="text" v-model="column.title">

            </Column>

            <div
                class="board__add-button add-column-item"
                @click="createColumn"
                key="addButton">

                <p>Add List</p>

            </div>
        </div>

        <Modal
            v-if="showModal"
            :id="itemId">

            <ModalItem :id="itemId" />
        </Modal>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, State, Getter } from '@/vue-script';
    import { Route } from 'vue-router';

    import { EventBus } from '@/eventBus';

    import BoardHeader from '@components/boards/BoardHeader.vue';
    import Column from '@components/Column.vue';
    import Modal from '@components/modal/Modal.vue';
    import ModalItem from '@components/modal/content/ModalItem.vue';

    import { ColumnState, BoardsState } from '@state/state';
    import { IItem, IColumn, IBoard } from '@models/index';
    import { BoardView } from '@enums/index';

    @Component({
        components: {
            Column,
            BoardHeader,
            Modal,
            ModalItem,
        },
    })

    export default class Board extends Vue {
        @State('columns') private columns!: ColumnState;
        @Getter('getBoards') private boards!: BoardsState;
        @Prop() private board!: IBoard;

        private showModal = false;
        private itemId!: number;

        public get getAllColumns() {
            const { id } = this.$route.params;
            const columns = this.$store.getters.getAllColumns(parseFloat(id));

            return columns;
        }

        private get getBoardId() {
            const { id } = this.$route.params;
            return parseFloat(id);
        }

        private get getBoardHeader() {
            const { id } = this.$route.params;
            const board: IBoard = this.$store.getters.getBoard(parseFloat(id));

            return board;
        }

        private randomId() {
            return Math.ceil(Math.random() * 1000);
        }

        private createColumn() {
            const newColumn: IColumn = {
                title: 'Column',
                itemIds: [],
                state: 'inactive',
                boardId: this.getBoardId,
            };

            this.$store.dispatch('createColumn', newColumn);
        }

        private changeView(newView: BoardView) {
            this.$store.dispatch('setCurrentView', newView);
        }

        private created() {
            EventBus.$on('open-modal', (itemId: number) => {
                this.showModal = true;
                this.itemId = itemId;
            });

            EventBus.$on('close-modal', () => {
                this.showModal = false;
            });
        }
    }
</script>

