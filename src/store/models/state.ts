import { IColumn, IItem } from '@/models/types';

// store
export interface RootState {
    columns: ColumnState;
    items: ItemState;
}

export interface ColumnState {
    columns: IColumn[];
}

export interface ItemState {
    items: IItem[];
}
