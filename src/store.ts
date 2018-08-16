import Vue from 'vue';
import Vuex from 'vuex';

import { items } from './store/items';
import { columns } from './store/columns';

import { IItem } from '@/data/models/types';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions: {
        addItem: ({rootState, commit}, newItem: IItem) => {
            const { columns } = rootState.columns;

            // add to state
            commit('addItem', newItem);

            // add id to column
            const column = columns.find((column) => column.id === newItem.columnId);
            column!.itemIds.push(newItem.id);
        },

        deleteElements({rootState, commit}, payload) {
            const { type, id } = payload;

            const { columns } = rootState.columns;
            const { items } = rootState.items;

            if (type === 'column') {
                // delete items
                commit('deleteItemColumn', id);

                // delete column
                commit('deleteColumn', id);
            }

            if (type === 'item') {
                const column = columns.find((column) => column.id === id);
                const item = items.find((item) => item.id === id);

                // delete column
                commit('deleteItem', id);

                // delete ids from column
            }
        },
    },
    modules: {
        columns,
        items,
    },
});

export default store;
