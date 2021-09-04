export class Hand {
    public static readonly HANDVALUE_MUK: number = 0; // 주먹
    public static readonly HANDVALUE_CHI: number = 1; // 가위
    public static readonly HANDVALUE_PAA: number = 2; // 보
    public static readonly hand = [
        new Hand(Hand.HANDVALUE_MUK),
        new Hand(Hand.HANDVALUE_CHI),
        new Hand(Hand.HANDVALUE_PAA),
    ]; // static method에서 this를 호출할 수 없다
    private static readonly nameList: string[] = ["주먹", "가위", "보"];

    private handValue: number;

    constructor(handValue: number) {
        this.handValue = handValue;
    }

    public static getHand = (handValue: number): Hand => {
        return Hand.hand[handValue];
    };

    public isStrongerThan = (h: Hand): boolean => {
        return this.fight(h) === 1;
    };

    public isWeakerThan = (h: Hand): boolean => {
        return this.fight(h) === -1;
    };

    private fight = (h: Hand): number => {
        if (this === h) return 0;
        else if ((this.handValue + 1) % 3 === h.handValue) return 1;
        else return -1;
    };

    public toString = (): string => {
        return Hand.nameList[this.handValue];
    };
}
