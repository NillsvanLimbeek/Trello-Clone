import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { ItemState } from '@/store/types';

// state
const state: ItemState = {
    items: [
        {
            title: 'Item 1',
            columnId: 1,
            id: 1,
            cardIds: [1, 2],
        },
        {
            title: 'Item 2',
            columnId: 2,
            id: 2,
            cardIds: [3],
        },
        {
            title: 'Item 3',
            columnId: 3,
            id: 3,
            cardIds: [],
        },
        {
            title: 'Item 4',
            columnId: 2,
            id: 4,
            cardIds: [],
        },
    ],
};

// getters
const getters: GetterTree<ItemState, any> = {

};

// mutations
const mutations: MutationTree<ItemState> = {
    deleteItem: (state, id) => state.items = state.items.filter((item) => item.id !== id),

    addItem(state, payload) {
        const { columnId, id } = payload;

        // add to column
        const column = state.columns.filter((column) => column.id === columnId);
        column[0].itemIds.push(id);

        state.items.push(payload);
    },
};

// actions
const actions: ActionTree<ItemState, any> = {

};

// export module
export const columns: Module<ItemState, any> = {
    state,
    getters,
    mutations,
    actions,
};
