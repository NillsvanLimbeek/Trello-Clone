import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@/store/state/rootState';
import { ItemState } from '@/store/state/state';
import { IItem } from '@/data/models/types';

// state
const state: ItemState = {
    items: [
        {
            title: 'Item 1',
            columnId: 1,
            id: 1,
            colorLabels: [1, 2],
            members: [],
            attachment: 1,
        },
        {
            title: 'Item 2',
            columnId: 2,
            id: 2,
            colorLabels: [1, 3],
            members: [],
            attachment: 2,
        },
        {
            title: 'Item 3',
            columnId: 3,
            id: 3,
            colorLabels: [4, 5, 6],
            members: [],
            attachment: 3,
        },
        {
            title: 'Item 4',
            columnId: 2,
            id: 4,
            colorLabels: [6],
            members: [],
            attachment: 0,
        },
    ],
};

// getters
const getters: GetterTree<ItemState, RootState> = {
    getItem: (state) => (itemId: number) => {
        return state.items.find((item) => item.id === itemId);
    },
};

// mutations
const mutations: MutationTree<ItemState> = {
    deleteItem: (state, id: number) => {
        state.items = state.items.filter((item) => item.id !== id);
    },

    deleteItemColumn: (state, id: number) => {
        state.items = state.items.filter((item) => item.columnId !== id);
    },

    addItem: (state, payload) => state.items.push(payload),
};

// actions
const actions: ActionTree<ItemState, RootState> = {

};

// export module
export const items: Module<ItemState, RootState> = {
    state,
    getters,
    mutations,
    actions,
};
