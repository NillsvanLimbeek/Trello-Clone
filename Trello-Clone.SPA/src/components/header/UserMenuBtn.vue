<template>
    <div class="user-menu-btn">
        <icon-base
            viewBox="0 0 50 50"
            class="user-menu-btn__icon"
            @click="openUserMenu">

            <icon-menu-button />
        </icon-base>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import { IconBase, IconMenuButton } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconMenuButton,
        },
    })
    export default class UserMenuBtn extends Vue {
        // methods
        private openUserMenu() {
            this.$store.commit('openSidebar', 'userMenu');
        }
    }
</script>