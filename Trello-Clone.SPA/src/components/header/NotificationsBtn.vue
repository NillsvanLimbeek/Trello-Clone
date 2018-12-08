<template>
    <div class="notifications-btn">
        <icon-base
            viewBox="0 0 229.2 229.2"
            size="22.5"
            class="notifications-btn__icon">

            <icon-notifications-button />
        </icon-base>

        <icon-base
            viewBox="0 0 512 512"
            size="8"
            class="notifications-btn__circle">

            <icon-circle />
        </icon-base>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import { IconBase, IconNotificationsButton, IconCircle } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconNotificationsButton,
            IconCircle,
        },
    })
    export default class NotificationsBtn extends Vue {

    }

</script>