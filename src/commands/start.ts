import { Command } from 'commander'
import path from 'path'
import fs from 'fs'
import { exec } from 'child_process'

export const command = new Command('start')
  .option('-w', '--watch')
  .description('Watch for file changes and restart automatically')
  .action(options => {
    const appPath = path.resolve(process.cwd(), 'app.ts')
    if (!fs.existsSync(appPath)) {
      console.error('Error: app.ts not found in the current directory.')
      process.exit(1)
    }
    const command = options.watch ? `tsx watch ${appPath}` : `tsx ${appPath}`
    console.log(
      `Starting the kompact project${options.watch ? ' in watch mode' : ''}...`
    )
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err.message}`)
        return
      }

      if (stderr) {
        console.error(`Stderr: ${stderr}`)
        return
      }

      console.log(stdout)
    })
  })
