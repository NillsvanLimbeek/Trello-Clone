<template>
    <div
        class="sidebar boards-menu"
        :class="{ 'boards-closed': !getBoardsMenuStatus }">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.1 31.1"
            class="sidebar__close-icon"
            @click="closeSidebar">

            <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
        </svg>

        <Search />

        <RecentBoards />

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    import Search from '@/components/Search.vue';
    import RecentBoards from '@/components/boardsMenu/RecentBoards.vue';

    @Component({
        components: {
            Search,
            RecentBoards,
        },
    })

    export default class Sidebar extends Vue {
        // state
        @Getter('getBoardsMenuStatus') private getBoardsMenuStatus!: boolean;

        // methods
        private closeSidebar() {
            this.$store.commit('closeSidebar', 'boardsMenu');
        }
    }

</script>

<style lang="scss">

    @import '../../assets/scss/components/sidebar';

</style>
