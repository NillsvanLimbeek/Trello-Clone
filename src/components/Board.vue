<template>
    <div class="board">

        <BoardHeader :board="getBoard"/>

        <div class="board__board-list">
            <ul class="board__list">
                <Column v-for="column in getColumns"
                        :key="column.id"
                        :columnId="column.id"
                        :state="column.state">
                    <input class="column__input" type="text" v-model="column.title">
                </Column>
            </ul>

            <div class="board__add-button"
                @click="addColumn">
                <p>Add List</p>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
    import { Route } from 'vue-router';
    import { State } from 'vuex-class';

    import Column from './Column.vue';
    import BoardHeader from './BoardHeader.vue';

    import { ColumnState, BoardsState } from '@/store/state/state';
    import { IItem, IColumn, IBoard } from '@/data/models/types';

    @Component({
        components: {
            Column,
            BoardHeader,
        },
    })

    export default class Board extends Vue {
        // state
        @State('boards') private boards!: BoardsState;
        @State('columns') private columns!: ColumnState;

        // computed
        private get getBoardId() {
            const { id } = this.$route.params;
            return parseFloat(id);
        }

        private get getBoard() {
            const { id } = this.$route.params;
            const board: IBoard = this.$store.getters.getBoard(parseFloat(id));

            return board;
        }

        private get getColumns() {
            const { columns } = this.columns;
            const { id } = this.$route.params;
            const board: IBoard = this.$store.getters.getBoard(parseFloat(id));

            const columnsArr: IColumn[] = [];

            board.columnIds.forEach((columnId) => {
                const column = columns.find((column) => column.id === columnId);

                if (column) {
                    columnsArr.push(column);
                }
            });

            return columnsArr;
        }

        // methods
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

        private randomId() {
            return Math.ceil(Math.random() * 1000);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/board';

</style>

