export interface IBoard {
    color: number;
    title: string;
    favorite: boolean;
    personal: boolean;
    createdAt: Date;
    id: number;
    columnIds: number[];
}
