import { File } from "./File";
import { Directory } from "./Directory";

export abstract class Visitor {
    public abstract visit(file: File): void;
    public abstract visit(directory: Directory): void;
}
