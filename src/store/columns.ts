import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { ColumnState } from '@/store/types';

// state
const state: ColumnState = {
    columns: [
        {
            title: 'Column 1',
            workspaceIds: 1,
            id: 1,
            itemIds: [1],
            cardIds: [1, 2],
        },
        {
            title: 'Column 2',
            workspaceIds: 2,
            id: 2,
            itemIds: [2, 4],
            cardIds: [3],
        },
        {
            title: 'Column 3',
            workspaceIds: 3,
            id: 3,
            itemIds: [3],
            cardIds: [],
        },
    ],
};

// getters
const getters: GetterTree<ColumnState, any> = {

};

// mutations
const mutations: MutationTree<ColumnState> = {
    addColumn: (state, payload) => state.columns.push(payload),

    deleteColumn: (state, id) => state.columns = state.columns.filter((column) => column.id !== id),
};

// actions
const actions: ActionTree<ColumnState, any> = {

};

// export module
export const columns: Module<ColumnState, any> = {
    state,
    getters,
    mutations,
    actions,
};
