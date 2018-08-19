// models
export interface IColumn {
    title: string;
    id: number;
    itemIds: number[];
    state: string;
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
