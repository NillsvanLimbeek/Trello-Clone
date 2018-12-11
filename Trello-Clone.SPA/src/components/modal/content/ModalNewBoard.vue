<template>
    <div class="modal-new-board">
        <p class="modal-new-board__title mb-1">Add a new board</p>

        <input
            type="text"
            class="modal-new-board__input"
            placeholder="Board Title">

        <p>Choose team</p>
        <p>Choose visibility</p>
        <p>Choose color</p>

        <button>Add board</button>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    export default class NewBoard extends Vue {

    }
</script>