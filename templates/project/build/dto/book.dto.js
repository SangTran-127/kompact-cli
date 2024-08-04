import { PartialType } from '@sangtrandev/kompact';
export class CreateBookDto {
    id;
    title;
    author;
    publishedYear;
}
export class UpdateBookDto extends PartialType(CreateBookDto) {
}
//# sourceMappingURL=book.dto.js.map