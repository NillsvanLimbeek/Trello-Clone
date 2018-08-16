import { ColumnState, ItemState } from './state';

export interface RootState {
    columns: ColumnState;
    items: ItemState;
}
