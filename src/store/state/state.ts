import { IColumn, IItem, ISidebar, IBoard } from '@/data/models/types';

export interface ColumnState {
    columns: IColumn[];
}

export interface ItemState {
    items: IItem[];
}

export interface SidebarState {
    sidebar: ISidebar;
}

export interface BoardsState {
    boards: IBoard[];
}
