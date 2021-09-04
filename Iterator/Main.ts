import { myIterator } from "./Aggerate";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

const main = () => {
    const bookShelf: BookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("Apple"));
    bookShelf.appendBook(new Book("Banana"));
    bookShelf.appendBook(new Book("Chicken"));
    bookShelf.appendBook(new Book("Diamond"));

    const it: myIterator = bookShelf.iterator();
    while (it.hasNext()) {
        const book: Book = it.next() as Book;
        console.log(book.getName());
    }
};

main();
