<template>
    <div id="app">
        <BoardsMenu />
        <UserMenu />

        <div class="main">
            <Header />
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import BoardsMenu from '@/components/navigation/BoardsMenu.vue';
    import Header from '@/components/navigation/Header.vue';
    import UserMenu from '@/components/navigation/UserMenu.vue';

    @Component({
        components: {
            BoardsMenu,
            Header,
            UserMenu,
        },
    })

    export default class App extends Vue {

    }

</script>

<style lang="scss">

    @import '../src/assets/scss/main';

</style>
