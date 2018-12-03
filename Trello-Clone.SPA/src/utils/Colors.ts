import { SquareColors } from '@enums/index';

export class Colors {
    public setColor(id: number) {
            switch (id) {
                case SquareColors.Green:
                    return '#61bd4f';
                case SquareColors.Yellow:
                    return '#f2d600';
                case SquareColors.Orange:
                    return '#ff9f1a';
                case SquareColors.Red:
                    return '#eb5a46';
                case SquareColors.Purple:
                    return '#c377e0';
                case SquareColors.Blue:
                    return '#0079bf';
                case SquareColors.LightBlue:
                    return '#5BC0EB';
                case SquareColors.LightGreen:
                    return '#06D6A0';
                case SquareColors.Pink:
                    return '#F0A6CA';
                case SquareColors.BrightPink:
                    return '#e438aa';
        }
    }
}
