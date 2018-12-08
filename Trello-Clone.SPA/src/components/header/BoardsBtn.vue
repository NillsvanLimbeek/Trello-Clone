<template>
    <div class="boards-btn">
        <div
            class="boards-btn__btn"
            @click="openBoardsMenu">

            <icon-base
                viewBox="0 0 606.9 606.9"
                class="boards-btn__icon">

                <icon-boards-button />
            </icon-base>

            <p class="boards-btn__text">Boards</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import { IconBase, IconBoardsButton } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconBoardsButton,
        },
    })
    export default class BoardsBtn extends Vue {
        private openBoardsMenu() {
            this.$store.commit('openSidebar', 'boardsMenu');
        }
    }
</script>