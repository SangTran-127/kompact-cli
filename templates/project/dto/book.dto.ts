import { PartialType } from '@sangtrandev/kompact'

export type Book = {
  id: number
  title: string
  author: string
  publishedYear: number
}

export class CreateBookDto {
  id: number
  title: string
  author: string
  publishedYear: number
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
