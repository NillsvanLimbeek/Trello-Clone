<template>
    <div class="header">

        <div class="header__left-menu">
            <BoardsBtn />

            <Search
                :boards-menu="false"
                placeholder="Search..."
            />
        </div>

        <router-link :to="{ name: 'boards' }">
            Trello-Clone
        </router-link>

        <div class="header__right-menu">
            <UserBtn />
            <NotificationsBtn />
            <UserMenuBtn />
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import BoardsBtn from '@components/header/BoardsBtn.vue';
    import UserMenuBtn from '@components/header/UserMenuBtn.vue';
    import UserBtn from '@components/header/UserBtn.vue';
    import NotificationsBtn from '@components/header/NotificationsBtn.vue';
    import Search from '@components/Search.vue';

    @Component({
        components: {
            BoardsBtn,
            UserMenuBtn,
            Search,
            UserBtn,
            NotificationsBtn,
        },
    })

    export default class Header extends Vue {}

</script>