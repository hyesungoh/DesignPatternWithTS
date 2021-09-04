import { Aggerate } from "./Aggerate";
import { Book } from "./Book";
import { BookShelfIterator } from "./BookShelfIterator";

export class BookShelf implements Aggerate {
    private books: Book[];
    private last: number;

    constructor(maxsize: number) {
        this.books = [];
        this.last = 0;
    }

    getBookAt = (index: number): Book => {
        return this.books[index];
    };

    appendBook = (book: Book) => {
        this.books[this.last] = book;
        this.last++;
    };

    getLength = () => {
        return this.last;
    };

    iterator = () => {
        return new BookShelfIterator(this);
    };
}
