<template>
    <transition name="modal">
        <div class="modal-background">
            <div
                class="modal"
                v-click-outside="closeModal">

                <button @click="closeModal">
                    Close
                </button>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    import { EventBus } from '@/eventBus';

    @Component({})

    export default class Modal extends Vue {
        @Prop({ required: true }) private id!: number;

        private closeModal() {
            EventBus.$emit('close-modal');
        }
    }
</script>

<style>

</style>
