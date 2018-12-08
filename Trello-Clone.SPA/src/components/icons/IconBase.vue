<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        :height="size"
        :width="size"
        @click="$emit('click')">

        <g :fill="color">
            <slot />
        </g>
    </svg>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class IconBase extends Vue {
        @Prop() private color!: string | number;
        @Prop({ default: 18 }) private size!: string | number;
        @Prop({ default: '0 0 32 32' }) private viewBox!: string;
    }
</script>