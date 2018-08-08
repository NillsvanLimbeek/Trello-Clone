// store
export interface RootState {
    columns: ColumnState;
    items: ItemState;
    cards: CardState;
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
    workspaceIds: number;
    id: number;
    itemIds: number[];
    cardIds: number[];
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

