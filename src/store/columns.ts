import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@/store/state/rootState';
import { ColumnState } from '@/store/state/state';
import { IColumn, IItem } from '@/data/models/types';

// state
const state: ColumnState = {
    columns: [
        {
            title: 'Column 1',
            boardId: 1,
            id: 1,
            itemIds: [1],
            state: 'inactive',
        },
        {
            title: 'Column 2',
            boardId: 1,
            id: 2,
            itemIds: [2, 4],
            state: 'active',
        },
        {
            title: 'Column 3',
            boardId: 1,
            id: 3,
            itemIds: [3],
            state: 'warning',
        },
        {
            title: 'Column 4',
            boardId: 1,
            id: 4,
            itemIds: [],
            state: 'danger',
        },
        {
            title: 'Column 5',
            boardId: 2,
            id: 5,
            itemIds: [],
            state: 'danger',
        },
    ],
};

// getters
const getters: GetterTree<ColumnState, any> = {
    getAllColumns: (state) => (boardId: number) => {
        return state.columns.filter((column) => column.boardId === boardId);
    },
};

// mutations
const mutations: MutationTree<ColumnState> = {
    addColumn: (state, payload) => state.columns.push(payload),

    deleteColumn: (state, id) => state.columns = state.columns.filter((column) => column.id !== id),

    setColumns: (state, payload: IColumn[]) => {
        state.columns = payload;
    },
};

// actions
const actions: ActionTree<ColumnState, RootState> = {

};

// export module
export const columns: Module<ColumnState, any> = {
    state,
    getters,
    mutations,
    actions,
};
