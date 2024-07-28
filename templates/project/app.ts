import { KompactApp } from '@sangtrandev/kompact'
import { BookController } from './controllers/book.controller'

const PORT = 3001

const app = new KompactApp({
  controllers: [BookController],
})

app.start(PORT, () => {
  console.log(`running at ${PORT}`)
})
