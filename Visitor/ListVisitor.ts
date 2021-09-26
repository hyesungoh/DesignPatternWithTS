import { Visitor } from "./Visitor";
import { File } from "./File";
import { Directory } from "./Directory";

export class ListVisitor extends Visitor {
    private currentdir: string = "";

    visit(file: File): void;
    visit(directory: Directory): void;

    public visit(value: File | Directory) {
        console.log(`${this.currentdir}/${value}`);
        if (value instanceof File) return;

        let savedir = this.currentdir;
        this.currentdir = `${this.currentdir}/${value.getName()}`;
        for (let entry of value.iterator()) {
            entry.accept(this);
        }
        this.currentdir = savedir;
    }
}
