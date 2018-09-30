<template>
    <div class="boards-list">
        <p class="boards-list__header">{{ title }}</p>

        <div>
            <BoardItem
                v-for="board in boards"
                :key="board.id"
                :board="board"/>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    import { IBoard } from '@models/types';

    import BoardItem from './BoardItem.vue';

    @Component({
        components: {
            BoardItem,
        },
    })

    export default class RecentBoards extends Vue {
        // props
        @Prop() private title!: string;
        @Prop() private boards!: object[];
    }

</script>