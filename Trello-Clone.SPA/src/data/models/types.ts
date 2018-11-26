// models
export interface IColumn {
    title: string;
    id: number;
    state: string;
    boardId: number;
    itemIds: number[];
}

export interface IItem {
    title: string;
    columnId: number;
    id: number;
    attachment: number;
    colorLabels: number[];
    members: object[];
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
    createdAt: Date;
    id: number;
    columnIds: number[];
    // user: string;
}

export interface ICalendar {
    daysInWeek: Date[];
    daysInMonth: Date[];
}
