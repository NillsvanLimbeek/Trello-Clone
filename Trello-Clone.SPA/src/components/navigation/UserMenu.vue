<template>
    <div
        class="sidebar user-menu"
        :class="{ 'user-closed': !getUserMenuStatus }">

        <icon-base
            viewBox="0 0 31.1 31.1"
            class="sidebar__close-icon"
            @click="closeSidebar">

            <icon-close />
        </icon-base>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Getter } from '@/vue-script';

    import { IconBase, IconClose } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconClose,
        },
    })

    export default class UserMenu extends Vue {
        // props
        @Getter('getUserMenuStatus') private getUserMenuStatus!: boolean;

        // methods
        private closeSidebar() {
            this.$store.commit('closeSidebar', 'userMenu');
        }
    }
</script>