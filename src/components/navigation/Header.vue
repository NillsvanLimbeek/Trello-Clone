<template>
    <div class="header">

        <BoardsBtn />
        <UserBtn />

    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import BoardsBtn from './header/BoardsBtn.vue';
    import UserBtn from './header/UserBtn.vue';

    @Component({
        components: {
            BoardsBtn,
            UserBtn,
        },
    })

    export default class Header extends Vue {}

</script>

<style lang="scss">

    @import '../../assets/scss/components/header';

</style>
