import { IColumn, IItem, ISidebar } from '@/data/models/types';

export interface ColumnState {
    columns: IColumn[];
}

export interface ItemState {
    items: IItem[];
}

export interface SidebarState {
    sidebar: ISidebar;
}
