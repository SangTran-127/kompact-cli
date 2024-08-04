import { NotFoundError } from '@sangtrandev/kompact';
export class BookService {
    bookList = [];
    idCounter = 1;
    createBook(createBookDto) {
        const newBook = {
            ...createBookDto,
            id: this.idCounter++,
        };
        this.bookList.push(newBook);
        return newBook;
    }
    getAllBook() {
        return this.bookList;
    }
    findOne(id) {
        const book = this.bookList.find(book => book.id === id);
        if (!book) {
            throw new NotFoundError(`Book with ID ${id} not found`);
        }
        return book;
    }
    update(id, updateBookDto) {
        const bookIndex = this.bookList.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new NotFoundError(`Book with ID ${id} not found`);
        }
        const updatedBook = { ...this.bookList[bookIndex], ...updateBookDto };
        this.bookList[bookIndex] = updatedBook;
        return updatedBook;
    }
    remove(id) {
        const bookIndex = this.bookList.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new NotFoundError(`Book with ID ${id} not found`);
        }
        return this.bookList.splice(bookIndex, 1);
    }
}
export const bookService = new BookService();
//# sourceMappingURL=book.service.js.map