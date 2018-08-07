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

// export default new Vuex.Store({
//     state: {
//         sidebarStatus: false,
//         workspaces: [
//             {
//                 title: 'Workspace 1',
//                 id: 1,
//                 color: '#d29034',
//                 userIds: [1, 2, 3],
//             },
//             {
//                 title: 'Workspace 2',
//                 id: 2,
//                 color: '#055a8c',
//                 userIds: 1,
//             },
//             {
//                 title: 'Workspace 3',
//                 id: 3,
//                 color: '#61bd4f',
//                 userIds: [1, 2, 3, 4],
//             },
//         ],
//         workspace: [
//             {
//                 id: 1,
//                 workspacesIds: [1, 2],
//             },
//             {
//                 id: 2,
//                 workspacesIds: [3, 4],
//             },
//             {
//                 id: 3,
//                 workspacesIds: [5],
//             },
//         ],
//         columns: [
//             {
//                 title: 'Column 1',
//                 workspaceIds: [1],
//                 id: 1,
//                 itemIds: [1],
//                 cardIds: [1, 2],
//             },
//             {
//                 title: 'Column 2',
//                 workspaceIds: [2],
//                 id: 2,
//                 itemIds: [2, 4],
//                 cardIds: [3],
//             },
//             {
//                 title: 'Column 3',
//                 workspaceIds: [3],
//                 id: 3,
//                 itemIds: [3],
//                 cardIds: [],
//             },
//         ],
//         items: [
//             {
//                 title: 'Item 1',
//                 columnId: 1,
//                 id: 1,
//                 cardIds: [1, 2],
//             },
//             {
//                 title: 'Item 2',
//                 columnId: 2,
//                 id: 2,
//                 cardIds: [3],
//             },
//             {
//                 title: 'Item 3',
//                 columnId: 3,
//                 id: 3,
//                 cardIds: [],
//             },
//             {
//                 title: 'Item 4',
//                 columnId: 2,
//                 id: 4,
//                 cardIds: [],
//             },
//         ],
//         cards: [
//             {
//                 title: 'Card 1',
//                 itemId: 1,
//                 id: 1,
//             },
//             {
//                 title: 'Card 2',
//                 itemId: 1,
//                 id: 2,
//             },
//             {
//                 title: 'Card 3',
//                 itemId: 2,
//                 id: 3,
//             },
//         ],
//     },
//     getters: {
//         getColumnTitle: (state) => {
//             return state.columns;
//         },
//     },
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
