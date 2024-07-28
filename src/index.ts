#!/usr/bin/env node

import { program } from "commander";

// program.option("--first").option("-s, --separator <char>");

// Adding action
program.action(() => {
  console.log(`hello`);
});

program
  .command("generate <type>")
  .description("Generate code for a given type")
  .action(async (type: string) => {
    console.log(type);
  });
// Execute program
program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
