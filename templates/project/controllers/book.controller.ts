import {
  Controller,
  Get,
  Patch,
  Post,
  Request,
  Response,
  SuccessResponse,
} from '@sangtrandev/kompact'
import { bookService } from '../services/book.service'

@Controller('book')
export class BookController {
  @Get()
  getAllBook(req: Request, res: Response) {
    new SuccessResponse({
      metadata: bookService.getAllBook(),
      message: 'Get all book successfully',
    }).send(res)
  }

  @Post()
  addBook(req: Request, res: Response) {
    // new
  }

  @Get(':id')
  getBookById(req: Request, res: Response) {
    new SuccessResponse({
      metadata: bookService.update(),
    })
  }

  @Patch(':id')
  updateBook(req: Request, res: Response) {}
}
