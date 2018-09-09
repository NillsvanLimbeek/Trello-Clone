<template>
    <div class="user-btn">
        <img
            src="../../assets/img/random-user.jpg"
            alt="User Img"
            class="user-btn__img"
        >

        <p class="user-btn__text">Hello, User!</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})

    export default class UserBtn extends Vue {

    }
</script>

<style lang="scss">

    @import './src/assets/scss/main';
    @import './src/assets/scss/components/user-btn';

</style>
