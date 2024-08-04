import { Book, CreateBookDto, UpdateBookDto } from '../dto/book.dto';
export declare class BookService {
    private readonly bookList;
    private idCounter;
    createBook(createBookDto: CreateBookDto): Book;
    getAllBook(): Book[];
    findOne(id: number): Book;
    update(id: number, updateBookDto: UpdateBookDto): Book;
    remove(id: number): Book[];
}
export declare const bookService: BookService;
