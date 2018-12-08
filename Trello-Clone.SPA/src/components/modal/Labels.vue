<template>
    <div class="labels">

        <div
            class="labels__color"
            :style="{ background: squareColor(label) }"
            v-for="(label, index) in labels"
            :key="label.id"
            @click="openLabelModal(index)" />

        <div
            class="labels__add"
            @click="openLabelModal(labels.lenght + 1)">

            <icon-base viewBox="0 0 42 42">
                <icon-plus />
            </icon-base>
        </div>

        <LabelModal
            v-if="showLabelModal"
            v-click-outside="closeLabelModal"
            @close="showLabelModal = false"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import LabelModal from './LabelModal.vue';
    import { IconBase, IconPlus } from '@components/icons';

    import { ColorLabel } from '@enums/index';
    import { Colors } from '@/utils';

    @Component({
        components: {
            LabelModal,
            IconBase,
            IconPlus,
        },
    })
    export default class Labels extends Vue {

        @Prop() private labels!: number[];

        private showLabelModal = false;

        private openLabelModal(index: number) {
            this.showLabelModal = true;
        }

        private closeLabelModal(e: Event, index: number) {
            const target = e.target as Element;

            if (!target.className.includes('labels__color')) {
                this.showLabelModal = false;
            }
        }

        private squareColor(label: number) {
            const colors = new Colors();
            return colors.setColor(label);
        }
    }
</script>
