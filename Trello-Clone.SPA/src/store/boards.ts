import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { BoardView } from '@enums/index';

import { RootState } from '@state/rootState';
import { BoardsState } from '@state/state';
import { IBoard } from '@models/index';

import axios from 'axios';

const state: BoardsState = {
    boards: [
        {
            title: 'Planner Board',
            color: 1,
            favorite: true,
            personal: false,
            createdAt: new Date('2018-01-05T07:05:48 -01:00'),
            id: 1,
            columnIds: [1, 2, 3, 4],
        },
        {
            title: 'Summary Board',
            color: 2,
            favorite: false,
            personal: false,
            createdAt: new Date('2018-10-01T11:34:17 -02:00'),
            id: 2,
            columnIds: [5],
        },
        {
            title: 'Project Board',
            color: 3,
            favorite: false,
            personal: true,
            createdAt: new Date('2018-03-27T10:13:40 -02:00'),
            id: 3,
            columnIds: [],
        },
        {
            title: 'Internal Board',
            color: 4,
            favorite: false,
            personal: true,
            createdAt: new Date('2018-07-16T07:32:39 -02:00'),
            id: 4,
            columnIds: [],
        },
        {
            title: 'Player Board',
            color: 5,
            favorite: false,
            personal: true,
            createdAt: new Date('2018-09-29T05:55:34 -02:00'),
            id: 5,
            columnIds: [],
        },
    ],

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

    createBoard: (state, payload: any) => {
        axios.post('http://localhost:5000/api/boards', payload)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    },

    changeCurrentView: (state, newView: BoardView) => {
        state.currentView = newView;
    },
};

const actions: ActionTree<BoardsState, RootState> = {
    async fetchBoards({ commit }) {
        await commit('fetchBoards');
    },

    async createboard({ commit }, payload: any) {
        await commit('createBoard', payload);
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
