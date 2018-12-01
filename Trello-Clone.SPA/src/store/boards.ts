import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { BoardView } from '@enums/index';

import { RootState } from '@state/rootState';
import { BoardsState } from '@state/state';
import { IBoard } from '@models/index';

import axios from 'axios';

const state: BoardsState = {
    boards: [],

    currentView: BoardView.Board,
};

const getters: GetterTree<BoardsState, RootState> = {
    getBoards: (state) => {
        return state.boards;
    },

    getCurrentView: (state) => {
        return state.currentView;
    },

    getBoard: (state) => (boardId: number) => {
        return state.boards.find((board) => board.id === boardId);
    },
};

const mutations: MutationTree<BoardsState>  = {
    fetchBoards: (state) => {
        axios.get('http://localhost:5000/api/boards')
            .then((response) => {
                state.boards = response.data;
            });
    },

    changeCurrentView: (state, newView: BoardView) => {
        state.currentView = newView;
    },
};

const actions: ActionTree<BoardsState, RootState> = {
    fetchBoards({ commit }) {
        commit('fetchBoards');
    },

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
