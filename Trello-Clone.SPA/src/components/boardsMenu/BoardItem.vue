<template>
        <div
            class="board-item"
            @mouseover="hideActions = true"
            @mouseleave="hideActions = false">

            <IconBase
                viewBox="0 0 459 459"
                height="30"
                width="30">

                <IconSquare />
            </IconBase>

            <p @click="clickLink">
                {{ board.title }}
            </p>

            <div
                class="board-item__actions"
                :class="{ hide: !hideActions }">

                <IconBase
                    viewBox="0 0 486.4 486.4"
                    height="17.5"
                    width="17.5">

                    <IconThrash/>
                </IconBase>

                <IconBase
                    viewBox="0 0 487.2 487.2"
                    height="17.5"
                    width="17.5">

                    <IconStar />
                </IconBase>

            </div>
        </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IconBase, IconSquare, IconThrash, IconStar } from '@components/icons';

    import { IBoard } from '@models/index';

    @Component({
        components: {
            IconBase,
            IconSquare,
            IconThrash,
            IconStar,
        },
    })
    export default class BoardItem extends Vue {
        @Prop() private board!: IBoard;

        private hideActions = false;

        private clickLink() {
            const boardId = this.board.id;

            this.$router.push({ name: 'board', params: { id: boardId.toString() }});
            this.$store.commit('closeSidebar', 'boardsMenu');
        }
    }
</script>
