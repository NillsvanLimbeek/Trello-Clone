import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@state/rootState';
import { ColumnState } from '@state/state';
import { IColumn, IItem } from '@models/index';

import axios from 'axios';

const state: ColumnState = {
    columns: [
    //     {
    //         title: 'Column 1',
    //         boardId: 1,
    //         id: 1,
    //         itemIds: [1],
    //         state: 'inactive',
    //     },
    //     {
    //         title: 'Column 2',
    //         boardId: 1,
    //         id: 2,
    //         itemIds: [2, 4],
    //         state: 'active',
    //     },
    //     {
    //         title: 'Column 3',
    //         boardId: 1,
    //         id: 3,
    //         itemIds: [3],
    //         state: 'warning',
    //     },
    //     {
    //         title: 'Column 4',
    //         boardId: 1,
    //         id: 4,
    //         itemIds: [],
    //         state: 'danger',
    //     },
    //     {
    //         title: 'Column 5',
    //         boardId: 2,
    //         id: 5,
    //         itemIds: [],
    //         state: 'danger',
    //     },
    ],
};

const getters: GetterTree<ColumnState, any> = {
    getAllColumns: (state) => (boardId: number) => {
        return state.columns.filter((column) => column.boardId === boardId);
    },

    getColumn: (state) => (columnId: number) => {
        return state.columns.find((column) => column.id === columnId);
    },
};

const mutations: MutationTree<ColumnState> = {
    fetchColumns: (state, columns: IColumn[]) => {
        state.columns = columns;
    },

    createColumn: (state, newColumn: IColumn) => {
        state.columns.push(newColumn);
    },

    deleteColumn: (state, id) => {
        state.columns = state.columns.filter((column) => column.id !== id);
    },
};

const actions: ActionTree<ColumnState, RootState> = {
    async fetchColumns({ commit }) {
        const columns = await axios.get('http://localhost:5000/api/columns');
        commit('fetchColumns', columns.data);
    },

    async createColumn({ commit, dispatch }, newColumn: IColumn) {
        const columnToCreate = await axios.post('http://localhost:5000/api/columns', newColumn);
        commit('createColumn', newColumn);
        dispatch('fetchColumns');
    },

};

export const columns: Module<ColumnState, any> = {
    state,
    getters,
    mutations,
    actions,
};
