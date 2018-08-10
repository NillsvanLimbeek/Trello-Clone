import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { RootState, GlobalState, CardState, ColumnState, ItemState, IItem, IColumn } from '@/store/types';

// state
const state: GlobalState = {
    global: [],
};

// getters
const getters: GetterTree<GlobalState, RootState> = {

};

// mutations
const mutations: MutationTree<GlobalState> = {

};

// actions
const actions: ActionTree<GlobalState, RootState> = {
    deleteItems: ({rootState}, payload) => {
        console.log(payload);
    },
};

// export module
export const global: Module<GlobalState, RootState> = {
    state,
    getters,
    mutations,
    actions,
};
