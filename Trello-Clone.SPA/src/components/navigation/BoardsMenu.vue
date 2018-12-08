<template>
    <div
        class="sidebar boards-menu"
        :class="{ 'boards-closed': !getBoardsMenuStatus }">

        <icon-base
            viewBox="0 0 31.1 31.1"
            width="15"
            height="15"
            class="sidebar__close-icon"
            @click="closeSidebar">

            <icon-close />
        </icon-base>

        <Search
            :boards-menu="true"
            placeholder="Search boards..."
        />

        <div class="sidebar__list px-2">
            <BoardItem
                v-for="board in boards"
                :key="board.id"
                :board="board" />
        </div>

        <icon-base
            viewBox="0 0 268.8 268.8"
            class="sidebar__settings-icon">

            <icon-settings />
        </icon-base>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Getter, State } from '@/vue-script';

    import { IBoard } from '@models/index';
    import { BoardsState } from '@state/state';

    import Search from '@components/Search.vue';
    import BoardItem from '@components/boards/BoardItem.vue';
    import { IconBase, IconClose, IconSettings } from '@components/icons';

    @Component({
        components: {
            Search,
            BoardItem,
            IconBase,
            IconClose,
            IconSettings,
        },
    })

    export default class Sidebar extends Vue {
        @Getter('getBoardsMenuStatus') private getBoardsMenuStatus!: boolean;
        @Getter('getBoards') private boards!: IBoard[];

        private closeSidebar() {
            this.$store.commit('closeSidebar', 'boardsMenu');
        }
    }

</script>
