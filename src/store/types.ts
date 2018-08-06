// store
export interface RootState {
    columns: ColumnState;
    items: ItemState;
    cards: CardState;
}

export interface ColumnState {
    columns: Column[];
}

export interface ItemState {
    items: Item[];
}
export interface CardState {
    cards: Card[];
}

// models
export interface Column {
    title: string;
    workspaceIds: number;
    id: number;
    itemIds: number[];
    cardIds: number[];
}

export interface Item {
    title: string;
    columnId: number;
    id: number;
    cardIds: number[];
}
export interface Card {
    title: string;
    itemId: number;
    id: number;
}

