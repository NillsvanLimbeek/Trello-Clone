<template>
    <div class="modal-new-board">
        <p class="modal-new-board__title mb-1">Add a new board</p>

        <form @submit.prevent="$emit('create-board', newBoard)">
            <input
                type="text"
                class="modal-new-board__input"
                placeholder="Board Title"
                v-model="newBoard.title">

            <input
                type="text"
                class="modal-new-board__input"
                placeholder="Board Team"
                v-model="newBoard.team">

            <input
                type="text"
                class="modal-new-board__input"
                placeholder="Board Visibility"
                v-model="newBoard.visibility">

            <input
                type="text"
                class="modal-new-board__input"
                placeholder="Board Color"
                v-model="newBoard.color">

            <button>
                Add board
            </button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    export default class NewBoard extends Vue {
        private newBoard = {};
    }
</script>