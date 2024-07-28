#!/usr/bin/env node

import { Command, program } from 'commander'
import path from 'path'
import fs from 'fs'

const commandPaths = path.join(__dirname, './commands')
fs.readdirSync(commandPaths).forEach(file => {
  const { command }: { command: Command } = require(path.join(
    commandPaths,
    file
  ))
  program.addCommand(command)
})
// Execute program
program.parse(process.argv)
