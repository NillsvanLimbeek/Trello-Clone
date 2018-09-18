<template>
    <div class="header">

        <div class="header__left-menu">
            <BoardsBtn />

            <Search
                :boards-menu="false"
                placeholder="Search..."
            />
        </div>


        <div class="header__right-menu">
            <UserBtn />
            <NotificationsBtn />
            <UserMenuBtn />
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import BoardsBtn from './header/BoardsBtn.vue';
    import UserMenuBtn from './header/UserMenuBtn.vue';
    import Search from '@/components/Search.vue';
    import UserBtn from '@/components/user/UserBtn.vue';
    import NotificationsBtn from '@/components/notifications/NotificationsBtn.vue';

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