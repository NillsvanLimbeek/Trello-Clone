<template>
    <div class="board">

        <BoardHeader
            :board-header="getBoardHeader"
            @change-view="changeView" />

        <div class="board__board-list">
            <transition-group
                name="add-column"
                tag="div"
                class="flex">

                <Column
                    class="add-column-item"
                    v-for="column in getAllColumns"
                    :key="column.id"
                    :columnId="column.id"
                    :state="column.state"
                    @add-item="addItem">

                    <input class="column__input" type="text" v-model="column.title">

                </Column>

                <div
                    class="board__add-button add-column-item"
                    @click="addColumn"
                    key="addButton">

                    <p>Add List</p>

                </div>
            </transition-group>
        </div>

        <Modal
            v-if="showModal"
            :id="itemId" />

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, State, Getter, Watch } from '@/vue-script';
    import { Route } from 'vue-router';

    import { EventBus } from '@/eventBus';

    import BoardHeader from '@components/boards/BoardHeader.vue';
    import Column from '@components/Column.vue';
    import Modal from '@components/modal/Modal.vue';

    import { ColumnState, BoardsState } from '@state/state';
    import { IItem, IColumn, IBoard } from '@models/index';
    import { BoardView } from '@enums/index';

    @Component({
        components: {
            Column,
            BoardHeader,
            Modal,
        },
    })

    export default class Board extends Vue {
        @State('columns') private columns!: ColumnState;
        @Getter('getBoards') private boards!: BoardsState;

        private showModal = false;
        private itemId!: number;

        public get getAllColumns() {
            const { id } = this.$route.params;
            return this.$store.getters.getAllColumns(parseFloat(id));
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

        private addColumn() {
            const randomId = this.randomId();

            const newColumn: IColumn = {
                title: 'Column',
                id: randomId,
                itemIds: [],
                state: 'inactive',
                boardId: this.getBoardId,
            };

            this.$store.commit('addColumn', newColumn);

            const board: IBoard = this.$store.getters.getBoard(this.getBoardId);

            if (board) {
                board.columnIds.push(randomId);
            }
        }

        private addItem(columnId: number) {
            const randomId = this.randomId();

            const newItem: IItem = {
                title: 'Item',
                columnId,
                id: randomId,
                colorLabels: [],
                members: [],
                attachment: 0,
            };

            this.$store.dispatch('addItem', newItem);
        }

        private changeView(newView: BoardView) {
            this.$store.dispatch('setCurrentView', newView);
        }

        private mounted() {
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

