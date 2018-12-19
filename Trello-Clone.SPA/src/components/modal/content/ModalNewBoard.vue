<template>
    <div class="modal-new-board">
        <p class="modal-new-board__title mb-1">Add a new board</p>

        <form @submit.prevent="createBoard">
            <input
                type="text"
                class="input"
                placeholder="Board Title"
                v-model="newBoard.title">

            <input
                type="text"
                class="input"
                placeholder="Board Team"
                v-model="newBoard.team">

            <input
                type="text"
                class="input"
                placeholder="Board Visibility"
                v-model="newBoard.visibility">

            <input
                type="text"
                class="input"
                placeholder="Board Color"
                v-model="newBoard.color">

            <button class="button">
                Add board
            </button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import { BoardToCreateDto } from '@data/dto/index';

    export default class NewBoard extends Vue {
        private newBoard: BoardToCreateDto = {
            title: '',
            color: 0,
        };

        private createBoard() {
            this.$emit('create-board', this.newBoard);
        }
    }
</script>