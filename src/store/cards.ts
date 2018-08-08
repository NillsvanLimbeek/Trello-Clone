import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { RootState, CardState, ColumnState, ItemState, IItem, IColumn, ICard } from '@/store/types';

// state
const state: CardState = {
    cards: [
        {
            title: 'Card 1',
            itemId: 1,
            id: 1,
            columnId: 1,
        },
        {
            title: 'Card 2',
            itemId: 1,
            id: 2,
            columnId: 1,
        },
        {
            title: 'Card 3',
            itemId: 2,
            id: 3,
            columnId: 1,
        },
    ],
    loading: false,
};

// getters
const getters: GetterTree<CardState, RootState> = {

};

// mutations
const mutations: MutationTree<CardState> = {
    deleteCard: (state, id) => state.cards.filter((card) => card.id !== id),
};

// actions
const actions: ActionTree<CardState, RootState> = {
    // addCard: (rootState: RootState, state: CardState, payload: ICard) => {
    //     const { columnId, itemId, id } = payload;

    //     // add to column
    //     const column = rootState.columns.columns.filter((column: IColumn) => column.id === columnId);
    //     column[0].cardIds.push(id);

    //     // add to item
    //     const item = rootState.items.items.filter((item: IItem) => item.id === itemId);
    //     column[0].cardIds.push(id);

    //     state.cards.push(payload);
    // },
};

// export module
export const cards: Module<CardState, RootState> = {
    state,
    getters,
    mutations,
    actions,
};
