// store
export interface CardState {
    todos: Card[];
}

// models
export interface Card {
    title: string;
    itemId: number;
    id: number;
}
