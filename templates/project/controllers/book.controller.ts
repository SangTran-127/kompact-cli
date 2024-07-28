import { Controller, Get, Patch, Post, Response } from '@sangtrandev/kompact'

@Controller('book')
export class BookController {
  @Get()
  getAllBook(req: Request, res: Response) {}

  @Post()
  addBook(req: Request, res: Response) {}

  @Get(':id')
  getBookById(req: Request, res: Response) {}

  @Patch(':id')
  updateBook(req: Request, res: Response) {}
}
