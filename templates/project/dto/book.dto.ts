import { PartialType } from '@sangtrandev/kompact'

export type Book = {
  id: number
  title: string
  author: string
  publishedDate: string
}

export class CreateBookDto {
  id: number
  title: string
  author: string
  publishedDate: string
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
