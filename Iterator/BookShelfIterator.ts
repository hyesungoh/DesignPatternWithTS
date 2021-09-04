import { myIterator } from "./Aggerate";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

export class BookShelfIterator implements myIterator {
    private bookShelf: BookShelf;
    private index: number;
  
    constructor(bookShelf: BookShelf) {
      this.bookShelf = bookShelf;
      this.index = 0;
    }
  
    hasNext = () => {
      return this.index < this.bookShelf.getLength() ? true : false;
    };
  
    next = () => {
      const book: Book = this.bookShelf.getBookAt(this.index);
      this.index++;
      return book;
    };
  }