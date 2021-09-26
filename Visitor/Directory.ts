import { Entry } from "./Entry";
import { Visitor } from "./Visitor";

export class Directory extends Entry {
    private name: string;
    private dir: Entry[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    public getName = (): string => {
        return this.name;
    };

    public getSize = (): number => {
        let size = 0;
        for (let entry of this.dir) size += entry.getSize();
        return size;
    };

    public add = (entry: Entry): Entry => {
        this.dir.push(entry);
        return this;
    };

    public iterator = (): Entry[] => {
        return this.dir;
    };

    public accept = (v: Visitor): void => {
        v.visit(this);
    };
}
