<template>
    <div
        class="sidebar user-menu"
        :class="{ 'user-closed': !getUserMenuStatus }">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.1 31.1"
            class="sidebar__icon"
            @click="closeSidebar">

            <polygon points="31.1 1.4 29.7 0 15.6 14.1 1.4 0 0 1.4 14.1 15.6 0 29.7 1.4 31.1 15.6 17 29.7 31.1 31.1 29.7 17 15.6 "/>
        </svg>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    @Component({})

    export default class UserMenu extends Vue {
        // props
        @Getter('getUserMenuStatus') private getUserMenuStatus!: boolean;

        // methods
        private closeSidebar() {
            this.$store.commit('closeSidebar', 'userMenu');
        }
    }
</script>

<style lang="scss">

    @import '../../assets/scss/components/sidebar';

</style>
