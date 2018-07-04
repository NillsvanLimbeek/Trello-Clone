<template>
    <div class="dropdown">
        <i class="fas fa-caret-up dropdown__arrow"></i>
        <div class="dropdown__body" @mouseleave="close">
            <p class="dropdown__item"><i class="dropdown__icon fas fa-trash"/>Delete</p>
            <p class="dropdown__item"><i class="dropdown__icon fas fa-copy"/>Copy</p>
            <p class="dropdown__item"><i class="dropdown__icon far fa-clock"/>Due Date</p>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            close() {
                this.$emit('close-dropdown')
            }
        }
    }
</script>

<style>
</style>