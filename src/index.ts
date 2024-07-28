#!/usr/bin/env node

import { program } from 'commander'
import path from 'path'
import fs from 'fs'
// program.option("--first").option("-s, --separator <char>");

const commandPaths = path.join(__dirname, './commands')
fs.readdirSync(commandPaths).forEach(file => {
  const command = require(path.join(commandPaths, file))
  program.addCommand(command)
})
// Execute program
program.parse(process.argv)

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
