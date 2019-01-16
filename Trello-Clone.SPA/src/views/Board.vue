<template>
    <div class="board">

        <BoardHeader
            :board-header="board"
            @change-view="changeView" />

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

        <Modal
            v-if="showModal"
            :id="itemId">

            <ModalItem :id="itemId" />
        </Modal>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, State, Getter } from '@/vue-script';
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
        private showModal = false;
        private itemId!: number;
        private boardId!: number;
        private boardOjb = {};

        public get columns() {
            return this.$store.getters.getAllColumns(this.boardId);
        }

        private get board() {
            return this.boardOjb;
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

            EventBus.$on('open-modal', (itemId: number) => {
                this.showModal = true;
                this.itemId = itemId;
            });

            EventBus.$on('close-modal', () => {
                this.showModal = false;
            });
        }

        private mounted() {
            const title = this.$refs.title as HTMLFormElement;

            if (title && title.length > 0) {
                title.forEach((el: HTMLFormElement) => {
                    el.blur();
                });
            }
        }
    }
</script>

