<template>
    <div id="app">
        <SideBar />
        <UserMenu />

        <div class="main">
            <Header />
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import SideBar from '@/components/navigation/SideBar.vue';
    import Header from '@/components/navigation/Header.vue';
    import UserMenu from '@/components/navigation/UserMenu.vue';

    @Component({
        components: {
            SideBar,
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
