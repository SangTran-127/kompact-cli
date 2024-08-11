#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs'
import path from 'path'
import url from 'url'

async function loadCommand() {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const commandPaths = path.join(__dirname, './commands')
  const files = fs.readdirSync(commandPaths)
  for (let file of files) {
    const modulePath = path.join(commandPaths, file)
    try {
      // Dynamically import the module
      const module = await import(modulePath)
      // Destructure the `command` export
      const { command } = module

      // Add the command to the program
      program.addCommand(command)
    } catch (error) {
      console.error(`Error loading module ${file}:`, error)
    }
  }
}
await loadCommand()
// Execute program
program.parse(process.argv)
