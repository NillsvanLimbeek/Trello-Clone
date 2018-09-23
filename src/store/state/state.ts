import { IColumn, IItem, ISidebar, IBoard, ICalendar } from '@/data/models/types';

import { BoardView, CalendarView } from '../../data/enums/enum';

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
