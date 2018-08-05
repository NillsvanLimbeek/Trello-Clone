<template>
    <div class="sidebar"
         :class="{ small: sidebarStatus }">
        <span class="sidebar__icon"
              @click="toggleSidebar">
            <i class="fas fa-times"></i>
        </span>

        <h1>SideBar</h1>

        <ul>
            <li>Workspace #1</li>
            <li>Workspace #2</li>
            <li>Workspace #3</li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {

            };
        },
        methods: {
            toggleSidebar() {
                this.$store.dispatch('toggleSidebar');
            },
        },
        computed: {
            ...mapState([
                'sidebarStatus',
            ]),
        },
    };

</script>

<style lang="scss">

    @import '../../assets/scss/components/sidebar';

</style>
