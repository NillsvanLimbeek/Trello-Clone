import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { RootState } from '@/store/state/rootState';
import { BoardsState } from '@/store/state/state';
import { IBoard } from '@/data/models/types';

const state: BoardsState = {
    boards: [
        {
            title: 'Planner board',
            color: '#0079bf',
            favorite: true,
            personal: false,
            recent: true,
            id: 1,
        },
        {
            title: 'Summary board',
            color: '#eb5a46',
            favorite: false,
            personal: false,
            recent: true,
            id: 2,
        },
        {
            title: 'Project board',
            color: '#ff9f1a',
            favorite: false,
            personal: true,
            recent: false,
            id: 3,
        },
        {
            title: 'Internal board',
            color: '#61bd4f',
            favorite: false,
            personal: true,
            recent: false,
            id: 4,
        },
        {
            title: 'Player board',
            color: '#c377e0',
            favorite: false,
            personal: true,
            recent: false,
            id: 5,
        },
    ],
};

const getters: GetterTree<BoardsState, RootState> = {
    getRecentBoards: (state) => {
        return state.boards.filter((board) => board.recent === true);
    },

    getPersonalBoards: (state) => {
        return state.boards.filter((board) => board.personal === true);
    },
};

const mutations: MutationTree<BoardsState>  = {

};

const actions: ActionTree<BoardsState, RootState> = {

};

export const boards: Module<BoardsState, any> = {
    state,
    getters,
    mutations,
    actions,
};
