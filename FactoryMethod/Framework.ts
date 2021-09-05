export abstract class Product {
    public abstract use(): void;
}

export abstract class Factory {
    public readonly create = (owner: string): Product => {
        const p: Product = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    };

    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}
