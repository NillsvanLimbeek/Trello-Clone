import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@state/rootState';
import { SidebarState } from '@state/state';
import { ISidebar } from '@models/index';

const state: SidebarState = {
    sidebar: {
        boardsStatus: false,
        userStatus: false,
    },
};

const getters: GetterTree<SidebarState, RootState> = {
    getUserMenuStatus: (state) => {
        return state.sidebar.userStatus;
    },
    getBoardsMenuStatus: (state) => {
        return state.sidebar.boardsStatus;
    },
};

const mutations: MutationTree<SidebarState>  = {
    openSidebar: (state, sideMenu: string) => {
        if (sideMenu === 'boardsMenu') {
            state.sidebar.boardsStatus = true;
        } else {
            state.sidebar.userStatus = true;
        }
    },

    closeSidebar: (state, sideMenu: string) => {
        if (sideMenu === 'boardsMenu') {
            state.sidebar.boardsStatus = false;
        } else {
            state.sidebar.userStatus = false;
        }
    },
};

const actions: ActionTree<SidebarState, RootState> = {

};

export const sidebar: Module<SidebarState, any> = {
    state,
    getters,
    mutations,
    actions,
};
