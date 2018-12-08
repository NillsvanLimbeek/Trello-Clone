<template>
    <div
        class="item"
        @click="openModal">

        <div
            class="item__labels"
            v-if="getColorlabels.length >= 1">

            <ItemColorLabel
                v-for="label in getColorlabels"
                :key="label.id"
                :label="label" />
        </div>

        <div class="item__header">
            <slot class="item__title"></slot>
        </div>

        <div
            class="item__attachments"
            v-if="getAttachment > 0">

            <icon-base
                viewBox="0 0 268.5 268.5"
                class="item__paperclip">

                <icon-paperclip />
            </icon-base>

            <p class="item__attachments-number">{{ getAttachment }}</p>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, State } from '@/vue-script';

    import { EventBus } from '@/eventBus';

    import { ItemState } from '@state/state';
    import { IItem } from '@models/index';

    import { IconBase, IconPaperclip } from '@components/icons';
    import ItemColorLabel from '@components/items/ItemColorLabel.vue';
    import Dropdown from '@components/Dropdown.vue';

    @Component({
        components: {
            ItemColorLabel,
            Dropdown,
            IconBase,
            IconPaperclip,
        },
    })

    export default class Item extends Vue {
        @Prop() private itemId!: number;

        @State('items') private items!: ItemState;

        private itemDropdown = false;
        private modal = false;

        private get getColorlabels() {
            const item: IItem = this.$store.getters.getItem(this.itemId);
            return item.colorLabels;
        }

        private get getAttachment() {
            const item: IItem = this.$store.getters.getItem(this.itemId);
            return item.attachment;
        }

        private openDropdown() {
            this.itemDropdown = !this.itemDropdown;
        }

        private openModal() {
            EventBus.$emit('open-modal', this.itemId);
        }
    }
</script>
