import { Hand } from "./Hand";
import { Strategy } from "./Strategy";

export class Player {
    private name: string;
    private strategy: Strategy;
    private winCount: number = 0;
    private loseCount: number = 0;
    private gameCount: number = 0;

    constructor(name: string, strategy: Strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    public nextHand = (): Hand => {
        return this.strategy.nextHand();
    };

    public win = (): void => {
        this.strategy.study(true);
        this.winCount++;
        this.gameCount++;
    };
    public lose = (): void => {
        this.strategy.study(false);
        this.loseCount++;
        this.gameCount++;
    };
    public even = (): void => {
        this.gameCount++;
    };

    public toString = (): string => {
        return `[${this.name} : ${this.gameCount} game, ${this.winCount} win, ${this.loseCount} lose ]`;
    };
}
