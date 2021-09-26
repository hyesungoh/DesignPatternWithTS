import { Entry } from "./Entry";
import { Visitor } from "./Visitor";

export class File extends Entry {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    public getName = (): string => {
        return this.name;
    };

    public getSize = (): number => {
        return this.size;
    };

    public accept = (v: Visitor): void => {
        v.visit(this);
    };
}
