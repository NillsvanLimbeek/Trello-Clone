<template>
    <div class="workspace">
        <ul class="workspace__list">
            <Column v-for="column in columns.columns"
                    :key="column.id"
                    :columnId="column.id">
                <input class="column__input" type="text" v-model="column.title">
            </Column>
        </ul>

        <div class="workspace__add-button"
             @click="addColumn">
            <i class="fas fa-plus"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State } from 'vuex-class';

    import Column from './Column.vue';

    import { ItemState, IItem } from '@/store/types';

    @Component({
        components: {
            Column,
        },
    })

    export default class Workspace extends Vue {
        // state
        @State('columns') private columns!: ItemState;

        // methods
        private addColumn() {
            const randomId = this.randomId();

            // this.$store.commit('addColumn', {
            //     title: 'Column',
            //     id: `column${randomId}`,
            //     itemIds: [],
            //     cardIds: [],
            // });
        }

        private randomId() {
            return Math.ceil(Math.random() * 100);
        }
    }
</script>
