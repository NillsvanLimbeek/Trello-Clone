<template>
    <div class="card">
        <slot class="card__title"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})

    export default class Card extends Vue {}

</script>

<style lang="scss">

    @import '../assets/scss/components/card';

</style>
