<template>
    <div class="board">

        <BoardHeader :board="getBoard"/>

        <div class="board__board-list">
            <ul class="board__list">
                <Column v-for="column in columns.columns"
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

        // watch
        @Watch('$route', { immediate: true, deep: true })
        private watchRoute(oldVal: Route) {
            const { params } = oldVal;

            console.log(params);
        }

        // computed
        private get getBoard() {
            const { id } = this.$route.params;
            const { boards } = this.boards;

            return boards.find((board: IBoard) => board.id === parseFloat(id));
        }

        // methods
        private addColumn() {
            const randomId = this.randomId();

            const newColumn: IColumn = {
                title: 'Column',
                id: randomId,
                itemIds: [],
                state: 'inactive',
                boardId: 1,
            };

            this.$store.commit('addColumn', newColumn);
        }

        private randomId() {
            return Math.ceil(Math.random() * 100);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/board';

</style>

