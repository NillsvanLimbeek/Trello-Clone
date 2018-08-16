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
    import { State } from 'vuex-class';

    import { IItem } from '@/data/models/types';
    import { ColorLabel } from '@/data/enums/enum';

    @Component({})

    export default class CardColorLabel extends Vue {
        // props
        @Prop() private labels!: IItem;

        // data
        private colorLabels = this.labels.colorLabels;

        private created() {
            console.log(this.colorLabels);
        }
    }
</script>

<style lang="scss">

    @import '../assets/scss/components/card-color-label.scss';

</style>
