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
    deleteCard: (state, id) => {
        state.cards.filter((card) => card.id !== id);
    },
};

// actions
const actions: ActionTree<CardState, RootState> = {
    addCard: ({rootState}, payload) => {
        const { columnId, itemId, id } = payload;

        // add to column
        const { columns } = rootState.columns;
        const column = columns.find((column: IColumn) => column.id === columnId);
        column!.cardIds.push(id);

        // add to item
        const { items } = rootState.items;
        const item = items.find((item: IItem) => item.id === itemId);
        item!.cardIds.push(id);

        state.cards.push(payload);
    },
};

// export module
export const cards: Module<CardState, RootState> = {
    state,
    getters,
    mutations,
    actions,
};
