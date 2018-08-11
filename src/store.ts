import Vue from 'vue';
import Vuex from 'vuex';

import { cards } from './store/cards';
import { items } from './store/items';
import { columns } from './store/columns';

import { IItem, ICard } from '@/store/types';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        addItem: ({rootState, commit}, newItem: IItem) => {
            // add to state
            commit('addItem', newItem);

            // add id to column
            const column = rootState.columns.columns.find((column) => column.id === newItem.columnId);
            column!.itemIds.push(newItem.id);
        },

        addCard: ({rootState, commit}, newCard: ICard) => {
            // add to state
            commit('addCard', newCard);

            // add id to item
            const item = rootState.items.items.find((item) => item.id === newCard.itemId);
            item!.cardIds.push(newCard.id);

            // add id to column
            const column = rootState.columns.columns.find((column) => column.id === newCard.columnId);
            column!.cardIds.push(newCard.id);
        },

        deleteElement({rootState, commit}, payload) {

        },
    },
    modules: {
        columns,
        items,
        cards,
    },
});

export default store;

//     actions: {
//         deleteElement({ state, commit }, payload) {
//             const column = state.columns.filter((column) => column.id === payload)[0];

//             if (column.cardIds) {
//                 column.cardIds.forEach((id) => {
//                     commit('deleteCard', id);
//                 });
//             }

//             if (column.itemIds) {
//                 column.itemIds.forEach((id) => {
//                     commit('deleteItem', id);
//                 });
//             }

//             commit('deleteColumn', payload);
//         },
//     },
// });
