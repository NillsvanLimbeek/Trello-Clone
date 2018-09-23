// models
export interface IColumn {
    title: string;
    id: number;
    itemIds: number[];
    state: string;
    boardId: number;
}

export interface IItem {
    title: string;
    columnId: number;
    id: number;
    colorLabels: number[];
    members: object[];
    attachment: number;
}

export interface ISidebar {
    boardsStatus: boolean;
    userStatus: boolean;
}

export interface IBoard {
    color: string;
    colorFaded: string;
    title: string;
    favorite: boolean;
    personal: boolean;
    recent: boolean;
    id: number;
    columnIds: number[];
    // user: string;
    // date: string;
}

export interface ICalendar {
    daysInWeek: Date[];
    daysInMonth: Date[];
}
