import { IColumn, IItem, ISidebar, IBoard } from '@/data/models/types';

import { BoardView } from '../../data/enums/enum';

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
    currentView: BoardView;
}
