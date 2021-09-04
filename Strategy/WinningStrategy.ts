import { Hand } from "./Hand";
import { Strategy } from "./Strategy";

export class WinningStrategy implements Strategy {
    private won: boolean = false;
    private prevHand: Hand;

    public nextHand = (): Hand => {
        if (!this.won) {
            this.prevHand = Hand.getHand(Math.floor(Math.random() * 3));
        }
        return this.prevHand;
    };

    public study = (win: boolean): void => {
        this.won = win;
    };
}
