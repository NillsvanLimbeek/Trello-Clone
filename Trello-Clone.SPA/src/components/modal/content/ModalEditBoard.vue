<template>
    <div class="modal-new-board">
        <p class="modal-new-board__title mb-1">Edit board</p>

        <form @submit.prevent="createBoard">
            <input
                type="text"
                class="input"
                placeholder="Board Title"
                v-model="editBoard.title">

            <input
                type="text"
                class="input"
                placeholder="Board Team"
                v-model="editBoard.team">

            <input
                type="text"
                class="input"
                placeholder="Board Visibility"
                v-model="editBoard.visibility">

            <input
                type="text"
                class="input"
                placeholder="Board Color"
                v-model="editBoard.color">

            <button class="button">
                Add board
            </button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import { BoardToUpdateDto } from '@data/dto/index';

    export default class EditBoard extends Vue {
        @Prop() private id!: number;

        private editBoard: BoardToUpdateDto = {
            title: '',
            color: 0,
            id: 7,
        };

        private createBoard() {
            EventBus.$emit('edit-board', this.editBoard);
        }
    }
</script>