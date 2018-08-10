import Vue from 'vue';
import Vuex from 'vuex';

import { cards } from './store/cards';
import { items } from './store/items';
import { columns } from './store/columns';
import { global } from './store/global';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        columns,
        items,
        cards,
        global,
    },
});

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
