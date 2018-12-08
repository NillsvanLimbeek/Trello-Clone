<template>
    <div
        class="search"
        :class="{ 'boards-menu-margin': boardsMenu }">

        <input
            type="text"
            class="search__input"
            :placeholder="placeholder"
        >

        <icon-base
            viewBox="0 0 57 57"
            class="search__icon">

            <icon-search />
        </icon-base>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { IconBase, IconSearch } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconSearch,
        },
    })

    export default class Search extends Vue {
        @Prop() private boardsMenu!: boolean;
        @Prop() private placeholder!: string;
    }
</script>