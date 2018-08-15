// store
export interface RootState {
    columns: ColumnState;
    items: ItemState;
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

// models
export interface IColumn {
    title: string;
    id: number;
    itemIds: number[];
    state: string;
    // workspaceIds: number;
}

export interface IItem {
    title: string;
    columnId: number;
    id: number;
    colorLabels: object[];
    members: object[];
    attachment: object[];
}
