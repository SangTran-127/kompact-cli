var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
import { Body, Controller, Delete, Get, Param, Patch, Post, SuccessResponse, } from '@sangtrandev/kompact';
import { bookService } from '../services/book.service';
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto';
let BookController = class BookController {
    getAllBook(_, res) {
        console.log(bookService.getAllBook());
        new SuccessResponse({
            metadata: [],
            message: 'Get all book successfully',
            statusCode: 200,
        }).send(res);
    }
    addBook(addBookDto, res) {
        console.log(`add book call`);
        new SuccessResponse({
            metadata: bookService.createBook(addBookDto),
            message: 'Add book successfully',
        }).send(res);
    }
    getBookById(bookId, res) {
        new SuccessResponse({
            metadata: bookService.findOne(Number(bookId)),
            message: 'Get book by id successfully',
        }).send(res);
    }
    updateBook(bookId, updateBookDto, res) {
        new SuccessResponse({
            metadata: bookService.update(Number(bookId), updateBookDto),
            message: 'Update book by id successfully',
        }).send(res);
    }
    deleteBook(bookId, res) {
        new SuccessResponse({
            metadata: bookService.remove(Number(bookId)),
            message: 'Update book by id successfully',
        }).send(res);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Request !== "undefined" && Request) === "function" ? _a : Object, typeof (_b = typeof Response !== "undefined" && Response) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getAllBook", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBookDto, typeof (_c = typeof Response !== "undefined" && Response) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "addBook", null);
__decorate([
    Get('/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof Response !== "undefined" && Response) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getBookById", null);
__decorate([
    Patch('/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBookDto, typeof (_e = typeof Response !== "undefined" && Response) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "updateBook", null);
__decorate([
    Delete('/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof Response !== "undefined" && Response) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "deleteBook", null);
BookController = __decorate([
    Controller('book')
], BookController);
export { BookController };
//# sourceMappingURL=book.controller.js.map