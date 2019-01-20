export interface IBoard {
    color: number;
    title: string;
    favorite: boolean;
    personal: boolean;
    id: number;
    columnIds?: number[];
}
