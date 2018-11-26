import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { BoardView } from '@enums/enum';

import { RootState } from '@state/rootState';
import { BoardsState } from '@state/state';
import { IBoard } from '@models/types';

const state: BoardsState = {
    boards: [
        {
            title: 'Planner Board',
            color: '#0079bf',
            colorFaded: '#0077bc80',
            favorite: true,
            personal: false,
            recent: true,
            id: 1,
            columnIds: [1, 2, 3, 4],
        },
        {
            title: 'Summary Board',
            color: '#eb5a46',
            colorFaded: '#eb594680 ',
            favorite: false,
            personal: false,
            recent: true,
            id: 2,
            columnIds: [5],
        },
        {
            title: 'Project Board',
            color: '#ff9f1a',
            colorFaded: '#ffa01a80',
            favorite: false,
            personal: true,
            recent: false,
            id: 3,
            columnIds: [],
        },
        {
            title: 'Internal Board',
            color: '#61bd4f',
            colorFaded: '#61bd4f80',
            favorite: false,
            personal: true,
            recent: false,
            id: 4,
            columnIds: [],
        },
        {
            title: 'Player Board',
            color: '#c377e0',
            colorFaded: '#c277e080',
            favorite: false,
            personal: true,
            recent: false,
            id: 5,
            columnIds: [],
        },
    ],

    currentView: BoardView.Board,
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

    getCurrentView: (state) => {
        return state.currentView;
    },
};

const mutations: MutationTree<BoardsState>  = {
    changeCurrentView: (state, newView: BoardView) => {
        state.currentView = newView;
    },
};

const actions: ActionTree<BoardsState, RootState> = {
    setCurrentView({ commit }, newView: BoardView) {
        commit('changeCurrentView', newView);
    },
};

export const boards: Module<BoardsState, any> = {
    state,
    getters,
    mutations,
    actions,
};
