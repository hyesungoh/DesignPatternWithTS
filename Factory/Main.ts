import { Factory, Product } from "./Framework";
import { IDCardFactory } from "./Idcard";

class Main {
    main = () => {
        const factory: Factory = new IDCardFactory();
        const card1: Product = factory.create("김철수");
        const card2: Product = factory.create("박철수");
        const card3: Product = factory.create("오철수");
        card1.use();
        card2.use();
        card3.use();
    };
}

const m = new Main();
m.main();
