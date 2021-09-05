export abstract class Builder {
    public abstract makeTitle(title: String): void;
    public abstract makeString(str: String): void;
    public abstract makeItems(items: String[]): void;
    public abstract close(): void;
}
