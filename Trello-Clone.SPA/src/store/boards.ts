import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { BoardView } from '@enums/enum';

import { RootState } from '@state/rootState';
import { BoardsState } from '@state/state';
import { IBoard } from '@models/types';

import axios from 'axios';

const state: BoardsState = {
    boards: [],

    currentView: BoardView.Board,
};

const getters: GetterTree<BoardsState, RootState> = {
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
    fetchBoards: (state) => {
        axios.get('http://localhost:5000/api/boards')
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
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
