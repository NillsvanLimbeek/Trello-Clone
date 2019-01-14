import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@state/rootState';
import { ItemState } from '@state/state';
import { IItem } from '@models/index';

import axios from 'axios';

const state: ItemState = {
    items: [
        // {
        //     title: 'Item 1',
        //     columnId: 1,
        //     id: 1,
        //     colorLabels: [1, 2],
        //     members: [],
        //     attachment: 1,
        // },
        // {
        //     title: 'Item 2',
        //     columnId: 2,
        //     id: 2,
        //     colorLabels: [1, 3],
        //     members: [],
        //     attachment: 2,
        // },
        // {
        //     title: 'Item 3',
        //     columnId: 3,
        //     id: 3,
        //     colorLabels: [4, 5, 6],
        //     members: [],
        //     attachment: 3,
        // },
        // {
        //     title: 'Item 4',
        //     columnId: 2,
        //     id: 4,
        //     colorLabels: [6],
        //     members: [],
        //     attachment: 0,
        // },
    ],
};

const getters: GetterTree<ItemState, RootState> = {
    getItem: (state) => (itemId: number) => {
        return state.items.find((item) => item.id === itemId);
    },

    getAllItems: (state) => (columnId: number) => {
        return state.items.filter((item) => item.columnId === columnId);
    },
};

const mutations: MutationTree<ItemState> = {
    fetchItems: (state, items: IItem[]) => {
        state.items = items;
    },

    deleteItem: (state, id: number) => {
        state.items = state.items.filter((item) => item.id !== id);
    },

    deleteItemColumn: (state, id: number) => {
        state.items = state.items.filter((item) => item.columnId !== id);
    },

    createItem: (state, newItem: IItem) => state.items.push(newItem),
};

const actions: ActionTree<ItemState, RootState> = {
    async fetchItems({ commit }) {
        const items = await axios.get('http://localhost:5000/api/items');
        commit('fetchItems', items.data);
    },

    async createItem({ commit }, newItem: IItem) {
        const itemToCreate = await axios.post('http://localhost:5000/api/items', newItem);
        console.log(itemToCreate);
        console.log(newItem);

        commit('createItem', newItem);
    },
};

export const items: Module<ItemState, RootState> = {
    state,
    getters,
    mutations,
    actions,
};
