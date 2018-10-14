<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal__header">
                <slot name="header">
                    This is the default tile!

                    <button type="button" class="btn-close" @click="$emit('close')">
                        x
                    </button>
                </slot>
            </header>
            <section class="modal__body">
                <slot name="body">
                    I'm the default body!
                </slot>
            </section>
            <footer class="modal__footer">
                <slot name="footer">
                    I'm the default footer!

                    <button type="button" class="btn-green" @click="$emit('close')">
                        Close me!
                    </button>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    export default class Modal extends Vue {

    }
</script>

<style>

</style>
