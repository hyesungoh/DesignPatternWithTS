import { Factory, Product } from "./Framework";

export class IDCard extends Product {
    private owner: string;

    constructor(owner: string) {
        super();
        console.log(`${owner}의 카드를 만듭니다.`);
        this.owner = owner;
    }

    public use = (): void => {
        console.log(`${this.owner}의 카드를 사용합니다.`);
    };

    public getOwner = (): string => {
        return this.owner;
    };
}

export class IDCardFactory extends Factory {
    private owners: string[] = [];

    protected createProduct = (owner: string): Product => {
        return new IDCard(owner);
    };

    protected registerProduct = (product: Product): void => {
        this.owners.push((product as IDCard).getOwner());
    };

    public getOwners = (): string[] => {
        return this.owners;
    };
}
