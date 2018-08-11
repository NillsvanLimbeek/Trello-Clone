// store
export interface RootState {
    columns: ColumnState;
    items: ItemState;
    cards: CardState;
}

export interface GlobalState {
    global: object[];
}

export interface ColumnState {
    columns: IColumn[];
}

export interface ItemState {
    items: IItem[];
}
export interface CardState {
    cards: ICard[];
}

// models
export interface IColumn {
    title: string;
    id: number;
    itemIds: number[];
    cardIds: number[];
    // workspaceIds: number;
}

export interface IItem {
    title: string;
    columnId: number;
    id: number;
    cardIds: number[];
}
export interface ICard {
    title: string;
    itemId: number;
    id: number;
    columnId: number;
}

