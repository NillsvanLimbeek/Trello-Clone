<template>
    <div class="label-modal">
        <div class="label-modal__title">
            Label Modal

            <icon-base
                viewBox="0 0 31.1 31.1"
                class="label-modal__close"
                @click="$emit('close')">

                <icon-close />
            </icon-base>
        </div>

        <div class="label-modal__body">

        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import { IconBase, IconClose } from '@components/icons';

    @Component({
        components: {
            IconBase,
            IconClose,
        },
    })
    export default class LabelModal extends Vue {
        private closeModal() {
            this.$emit('close');
        }
    }
</script>

<style>

</style>
