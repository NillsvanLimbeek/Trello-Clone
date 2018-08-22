<template>
    <div class="user-btn">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            class="user-btn__icon"
            @click="openUserMenu">

            <rect y="2" width="50" height="4"/>
            <rect y="16" width="50" height="4"/>
            <rect y="30" width="50" height="4"/>
            <rect y="44" width="50" height="4"/>
        </svg>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})

    export default class UserBtn extends Vue {
        // methods
        private openUserMenu() {
            this.$store.commit('openSidebar', 'userMenu');
        }
    }
</script>

<style lang="scss">

    @import '../../../assets/scss/components/user-btn';

</style>
