import { Request, Response } from '@sangtrandev/kompact';
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto';
export declare class BookController {
    getAllBook(_: Request, res: Response): void;
    addBook(addBookDto: CreateBookDto, res: Response): void;
    getBookById(bookId: string, res: Response): void;
    updateBook(bookId: string, updateBookDto: UpdateBookDto, res: Response): void;
    deleteBook(bookId: string, res: Response): void;
}
