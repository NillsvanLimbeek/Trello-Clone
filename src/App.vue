<template>
    <div id="app">
        <SideBar />

        <div class="main">
            <Header />
            <router-view/>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/navigation/SideBar.vue'
    import Header from '@/components/navigation/Header.vue'

    export default {
        components: {
            SideBar,
            Header
        }
    }
</script>

<style lang="scss">

    @import '../src/assets/scss/main';

</style>
