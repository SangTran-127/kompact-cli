import { KompactApp } from 'kompact'
import { BookController } from '@controllers/book.controller'
import { MainController } from '@controllers/main.controller'

const PORT = 3002

const app = new KompactApp({
  controllers: [MainController, BookController],
})

app.start(PORT, () => {
  console.log(`running at ${PORT}`)
})
