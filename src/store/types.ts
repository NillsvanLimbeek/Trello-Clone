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
    loading: boolean;
}

// models
export interface IColumn {
    title: string;
    id: number | string;
    itemIds: number[];
    cardIds: number[];
    workspaceIds: number | string;
}

export interface IItem {
    title: string;
    columnId: number | string;
    id: number | string;
    cardIds: number[];
}
export interface ICard {
    title: string;
    itemId: number | string;
    id: number | string;
    columnId: number | string;
}

