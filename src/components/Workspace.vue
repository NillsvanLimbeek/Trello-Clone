<template>
    <div class="workspace">
        <ul class="workspace__list">
            <Column v-for="column in columns.columns"
                    :key="column.id"
                    :columnId="column.id"
                    :state="column.state">
                <input class="column__input" type="text" v-model="column.title">
            </Column>
        </ul>

        <div class="workspace__add-button"
             @click="addColumn">
             <p>Add List</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';

    import Column from './Column.vue';

    import {ColumnState, ItemState, IItem, IColumn } from '@/store/types';

    @Component({
        components: {
            Column,
        },
    })

    export default class Workspace extends Vue {
        // state
        @State('columns') private columns!: ColumnState;

        // methods
        private addColumn() {
            const randomId = this.randomId();

            const newColumn: IColumn = {
                title: 'Column',
                id: randomId,
                itemIds: [],
                state: 'inactive',
                // workspaceIds: randomId,
            };

            this.$store.commit('addColumn', newColumn);
        }

        private randomId() {
            return Math.ceil(Math.random() * 100);
        }
    }
</script>
