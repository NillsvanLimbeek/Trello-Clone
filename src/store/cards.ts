import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { CardState } from './types';

// state
const state: CardState = {
    cards: [
        {
            title: 'Card 1',
            itemId: 1,
            id: 1,
        },
        {
            title: 'Card 2',
            itemId: 1,
            id: 2,
        },
        {
            title: 'Card 3',
            itemId: 2,
            id: 3,
        },
    ],
};

// getters
const getters: GetterTree<CardState, any> = {

};

// mutations
const mutations: MutationTree<CardState> = {
    deleteCard: (state, id) => state.cards.filter((card) => card.id !== id),

    addCard: (state, payload) => {
        const { columnId, itemId, id } = payload;

        // add to column
        const column = state.columns.filter((column) => column.id === columnId);
        column[0].cardIds.push(id);

        // add to item
        const item = state.items.filter((item) => item.id === itemId);
        column[0].cardIds.push(id);

        state.cards.push(payload);
    },
};

// actions
const actions: ActionTree<CardState, any> = {

};

// export module
export const cards: Module<CardState, any> = {
    state,
    getters,
    mutations,
    actions,
};