import { KompactApp } from '@sangtrandev/kompact';
import { BookController } from './controllers/book.controller';
const PORT = 3002;
const app = new KompactApp({
    controllers: [BookController],
});
app.start(PORT, () => {
    console.log(`running at ${PORT}`);
});
//# sourceMappingURL=app.js.map