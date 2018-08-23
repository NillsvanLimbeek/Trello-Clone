import { ColumnState, ItemState, SidebarState, BoardsState } from './state';

export interface RootState {
    columns: ColumnState;
    items: ItemState;
    sidebar: SidebarState;
    boards: BoardsState;
}
