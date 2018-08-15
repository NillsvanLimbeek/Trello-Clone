<template>
    <div class="color-label__wrapper">
        <div class="color-label label-green"></div>
        <div class="color-label label-yellow"></div>
        <div class="color-label label-orange"></div>
        <div class="color-label label-red"></div>
        <div class="color-label label-purple"></div>
        <div class="color-label label-blue"></div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IItem } from '@/models/types';
    import { State } from 'vuex-class';

    @Component({})

    export default class CardColorLabel extends Vue {
        // props
        @Prop() private labels!: IItem;

        private created() {
            console.log(this.labels);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/card-color-label.scss';

</style>
