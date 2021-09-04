export interface Aggerate {
    iterator: () => myIterator; // myIterator는 후술
}

export interface myIterator {
    hasNext: () => boolean;
    next: () => object;
}
