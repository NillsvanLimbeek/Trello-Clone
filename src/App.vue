<template>
    <div id="app">
        <BoardsMenu />
        <UserMenu />

        <div class="main">
            <Header />

            <router-view v-if="currentView === BoardView.Board"/>

            <Calendar v-if="currentView === BoardView.Calendar" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    import { BoardView } from '@enums/enum';

    import BoardsMenu from '@components/navigation/BoardsMenu.vue';
    import Header from '@components/navigation/Header.vue';
    import UserMenu from '@components/navigation/UserMenu.vue';
    import Calendar from '@components/Calendar.vue';

    @Component({
        components: {
            BoardsMenu,
            Header,
            UserMenu,
            Calendar,
        },
    })

    export default class App extends Vue {
        private BoardView: any = BoardView;

        @Getter('getCurrentView') private currentView!: BoardView;
    }

</script>

<style lang="scss">

    @import 'assets/scss/main';

</style>
