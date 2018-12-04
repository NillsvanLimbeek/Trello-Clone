export interface IBoard {
    color: number;
    colorFaded: string;
    title: string;
    favorite: boolean;
    personal: boolean;
    createdAt: Date;
    id: number;
    columnIds: number[];
    // user: string;
}
