<template>
    <div
        class="dropdown"
        :class="{ 'position-column': type === 'column', 'position-item': type === 'item' }">

        <i class="fas fa-caret-up dropdown__arrow"></i>
        <div class="dropdown__body" @mouseleave="close">
            <p
                class="dropdown__item"
                @click="deleteColumn">
                <i class="dropdown__icon fas fa-trash"/>
                Delete
            </p>

            <p class="dropdown__item">
                <i class="dropdown__icon fas fa-copy"/>
                Copy
            </p>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            type: {
                required: true,
                type: String,
            },
        },
        methods: {
            close() {
                this.$emit('close-dropdown');
            },
            deleteColumn() {
                this.$emit('global-delete');
            },
        },
    };
</script>

<style lang="scss">

    @import '../assets/scss/components/dropdown';

</style>
