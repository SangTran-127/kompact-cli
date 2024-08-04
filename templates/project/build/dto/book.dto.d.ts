export type Book = {
    id: number;
    title: string;
    author: string;
    publishedYear: number;
};
export declare class CreateBookDto {
    id: number;
    title: string;
    author: string;
    publishedYear: number;
}
declare const UpdateBookDto_base: import("@sangtrandev/kompact").Class<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
}
export {};
