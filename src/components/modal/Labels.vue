<template>
    <div class="labels">

        <div
            class="labels__color"
            v-for="label in labels"
            :key="label.id"></div>

        <div class="labels__add">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42">

                <polygon points="42 20 22 20 22 0 20 0 20 20 0 20 0 22 20 22 20 42 22 42 22 22 42 22 "/>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class Labels extends Vue {
        @Prop() private labels!: number[];
    }
</script>
