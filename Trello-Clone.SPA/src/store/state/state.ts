import { IColumn, IItem, ISidebar, IBoard, ICalendar } from '@models/index';

import { BoardView, CalendarView } from '@enums/index';

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

export interface CalendarState {
    calendarDays: ICalendar;
    calendarView: CalendarView;
}
