<template>
    <div class="header">

        <div class="header__left-menu">
            <BoardsBtn />

            <Search
                :boards-menu="false"
                placeholder="Search..."
            />
        </div>


        <UserBtn />

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import BoardsBtn from './header/BoardsBtn.vue';
    import UserBtn from './header/UserBtn.vue';
    import Search from '@/components/Search.vue';

    @Component({
        components: {
            BoardsBtn,
            UserBtn,
            Search,
        },
    })

    export default class Header extends Vue {}

</script>

<style lang="scss">

    @import '../../assets/scss/components/header';

</style>
