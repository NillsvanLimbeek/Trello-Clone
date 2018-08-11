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
            const { columns } = rootState.columns;

            // add to state
            commit('addItem', newItem);

            // add id to column
            const column = columns.find((column) => column.id === newItem.columnId);
            column!.itemIds.push(newItem.id);
        },

        addCard: ({rootState, commit}, newCard: ICard) => {
            const { columns } = rootState.columns;
            const { items } = rootState.items;

            // add to state
            commit('addCard', newCard);

            // add id to item
            const item = rootState.items.items.find((item) => item.id === newCard.itemId);
            item!.cardIds.push(newCard.id);

            // add id to column
            const column = columns.find((column) => column.id === newCard.columnId);
            column!.cardIds.push(newCard.id);
        },

        deleteElements({rootState, commit}, payload) {
            const { type, id } = payload;

            const { columns } = rootState.columns;
            const { items } = rootState.items;

            if (type === 'column') {
                // delete cards
                commit('deleteCardColumn', id);

                // delete items
                commit('deleteItem', id);

                // delete column
                commit('deleteColumn', id);
            }

            if (type === 'item') {
                const column = columns.find((column) => column.id === id);
                const item = items.find((item) => item.id === id);

                console.log(item);

                // delete cards
                commit('deleteCardItem', id);

                // delete column
                commit('deleteItem', id);

                // delete ids from column
            }
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
