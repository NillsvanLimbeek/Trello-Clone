import Vue from 'vue';
import Vuex from 'vuex';

import { cards } from './store/cards';
import { items } from './store/items';
import { columns } from './store/columns';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        columns,
        items,
        cards,
    },
});

//     mutations: {
//         toggleSidebar(state) {
//             state.sidebarStatus = !state.sidebarStatus;
//         },
//         addColumn(state, payload) {
//             state.columns.push(payload);
//         },
//         addItem(state, payload) {
//             const { columnId, id } = payload;

//             // add to column
//             const column = state.columns.filter( (column) => column.id === columnId);
//             column[0].itemIds.push(id);

//             state.items.push(payload);
//         },
//         addCard(state, payload) {
//             const { columnId, itemId, id } = payload;

//             // add to column
//             const column = state.columns.filter((column) => column.id === columnId);
//             column[0].cardIds.push(id);

//             // add to item
//             const item = state.items.filter((item) => item.id === itemId);
//             column[0].cardIds.push(id);

//             state.cards.push(payload);
//         },
//         deleteColumn(state, id) {
//             state.columns = state.columns.filter((column) => column.id !== id);
//         },
//         deleteItem(state, id) {
//             state.items = state.items.filter((item) => item.id !== id);
//         },
//         deleteCard(state, id) {
//             state.cards = state.cards.filter((card) => card.id !== id);
//         },
//     },
//     actions: {
//         toggleSidebar({ commit }) {
//             commit('toggleSidebar');
//         },
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
