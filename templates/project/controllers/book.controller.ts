import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Response,
  SuccessResponse,
} from '@sangtrandev/kompact'
import { bookService } from '../services/book.service'
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto'

@Controller('book')
export class BookController {
  @Get()
  getAllBook(_: Request, res: Response) {
    new SuccessResponse({
      metadata: bookService.getAllBook(),
      message: 'Get all book successfully',
    }).send(res)
  }

  @Post()
  addBook(@Body() addBookDto: CreateBookDto, res: Response) {
    new SuccessResponse({
      metadata: bookService.createBook(addBookDto),
      message: 'Add book successfully',
    }).send(res)
  }

  @Get(':id')
  getBookById(@Param('id') bookId: string, res: Response) {
    new SuccessResponse({
      metadata: bookService.findOne(Number(bookId)),
      message: 'Get book by id successfully',
    }).send(res)
  }

  @Patch(':id')
  updateBook(
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
    res: Response
  ) {
    new SuccessResponse({
      metadata: bookService.update(Number(bookId), updateBookDto),
      message: 'Update book by id successfully',
    }).send(res)
  }

  @Delete()
  deleteBook(@Param('id') bookId: string, res: Response) {
    new SuccessResponse({
      metadata: bookService.remove(Number(bookId)),
      message: 'Update book by id successfully',
    }).send(res)
  }
}
