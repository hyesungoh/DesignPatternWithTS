import { Hand } from "./Hand";
import { Strategy } from "./Strategy";

export class RandomStrategy implements Strategy {
    private won: boolean = true;
    private prevHand: Hand;

    public nextHand = (): Hand => {
        this.prevHand = Hand.getHand(Math.floor(Math.random() * 3));
        return this.prevHand;
    };

    public study = (win: boolean): void => {
        this.won = win;
    };
}
