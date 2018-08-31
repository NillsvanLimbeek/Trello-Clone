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
            columnIds: [1, 2, 3, 4],
        },
        {
            title: 'Summary board',
            color: '#eb5a46',
            favorite: false,
            personal: false,
            recent: true,
            id: 2,
            columnIds: [5],
        },
        {
            title: 'Project board',
            color: '#ff9f1a',
            favorite: false,
            personal: true,
            recent: false,
            id: 3,
            columnIds: [],
        },
        {
            title: 'Internal board',
            color: '#61bd4f',
            favorite: false,
            personal: true,
            recent: false,
            id: 4,
            columnIds: [],
        },
        {
            title: 'Player board',
            color: '#c377e0',
            favorite: false,
            personal: true,
            recent: false,
            id: 5,
            columnIds: [],
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

    getBoard: (state) => (boardId: number) => {
        return state.boards.find((board) => board.id === boardId);
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
