import { Element } from "./Element";
import { Visitor } from "./Visitor";
import { FileTreatmentException } from "./FileTreatmentException";

export abstract class Entry implements Element {
    public abstract accept: (v: Visitor) => void;
    public abstract getName: () => string;
    public abstract getSize: () => number;

    public add = (entry: Entry): Entry => {
        throw new FileTreatmentException();
    };

    public iterator = (): Entry[] => {
        throw new FileTreatmentException();
    };

    public toString = (): string => {
        return `${this.getName()} (${this.getSize()})`;
    };
}
