import {
    ColumnState,
    ItemState,
    SidebarState,
    BoardsState,
    CalendarState,
} from './state';

export interface RootState {
    columns: ColumnState;
    items: ItemState;
    sidebar: SidebarState;
    boards: BoardsState;
    calendar: CalendarState;
}
