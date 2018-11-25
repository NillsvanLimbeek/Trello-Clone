<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        :height="height"
        :width="width">

        <g>
            <slot />
        </g>
    </svg>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class IconBase extends Vue {
        @Prop({ default: 18 }) private width!: string | number;
        @Prop({ default: 18 }) private height!: string | number;
        @Prop({ default: '0 0 32 32' }) private viewBox!: string;
    }
</script>