<template>
    <div class="board-list">
        <p class="board-list__header">{{ title }}</p>

        <div class="board-list__list">
            <BoardCard
                v-for="board in boards"
                :key="board.id"
                :board="board"/>

            <div
                v-if="addBoard"
                class="board-card board-card__add"
                @click="$emit('show-modal')">
                Add Board
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IBoard } from '@models/index';

    import BoardCard from './BoardCard.vue';

    @Component({
        components: {
            BoardCard,
        },
    })

    export default class RecentBoards extends Vue {
        @Prop() private title!: string;
        @Prop({ default: true }) private addBoard!: boolean;
        @Prop() private boards!: IBoard[];
    }

</script>