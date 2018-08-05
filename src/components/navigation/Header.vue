<template>
    <div class="header"
         :class="{ wide: sidebarStatus }">
        Header
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'sidebarStatus',
            ]),
        },
    };

</script>

<style lang="scss">

    @import '../../assets/scss/components/header';

</style>
