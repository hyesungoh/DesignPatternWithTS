import { Builder } from "./Builder";

export class TextBuilder extends Builder {
    private buffer: string[] = [];
    public makeTitle = (title: String): void => {
        this.buffer.push("=================\n");
        this.buffer.push(title + "\n");
    };

    public makeString = (str: String): void => {
        this.buffer.push(str + "\n");
    };

    public makeItems = (items: String[]): void => {
        for (let i = 0; i < items.length; i++) {
            this.buffer.push(items[i] + "\n");
        }
    };

    public close = (): void => {
        this.buffer.push("=================\n");
    };

    public getResult = (): string => {
        return this.buffer.join("");
    };
}
