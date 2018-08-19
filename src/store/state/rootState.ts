import { ColumnState, ItemState, SidebarState } from './state';

export interface RootState {
    columns: ColumnState;
    items: ItemState;
    sidebar: SidebarState;
}
