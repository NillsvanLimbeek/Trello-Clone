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
    fetchColumns: (state) => {
        axios.get('http://localhost:5000/api/columns')
            .then((response) => {
                state.columns = response.data;
            })
            // tslint:disable-next-line
            .catch((error) => console.log(error));
    },

    addColumn: (state, payload) => state.columns.push(payload),

    deleteColumn: (state, id) => state.columns = state.columns.filter((column) => column.id !== id),

    setColumns: (state, payload: IColumn[]) => {
        state.columns = payload;
    },
};

const actions: ActionTree<ColumnState, RootState> = {
    async fetchColumns({ commit }) {
        await commit('fetchColumns');
    },
};

export const columns: Module<ColumnState, any> = {
    state,
    getters,
    mutations,
    actions,
};
