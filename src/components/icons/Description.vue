<template>
    <div @click="$emit('click')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.9 22.9">
                <path d="M11.5 22.8H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h11c0.3 0 0.5 0.2 0.5 0.5S11.7 22.8 11.5 22.8z"/>
                <path d="M22.4 15.6H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 15.6 22.4 15.6z"/>
                <path d="M22.4 8.3H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 8.3 22.4 8.3z"/>
                <path d="M22.4 1.1H0.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h21.9c0.3 0 0.5 0.2 0.5 0.5S22.7 1.1 22.4 1.1z"/>
        </svg>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component } from '@/vue-script';

    export default class Description extends Vue {

    }
</script>
