<template>
    <div
        v-click-outside="closeDropdown"
        class="dropdown"
        :class="{
            'position-column': type === 'column',
            'position-item': type === 'item'
        }">

        <div class="dropdown__body">
            <p
                class="dropdown__item"
                @click="$emit('delete-column')">
                Delete
            </p>

            <p
                class="dropdown__item"
                @click="$emit('duplicate-column')">
                Duplicate
            </p>
        </div>
    </div>

</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class Dropdown extends Vue {
        @Prop() private type!: string;

        private closeDropdown() {
            this.$emit('close-dropdown');
        }
    }

</script>
