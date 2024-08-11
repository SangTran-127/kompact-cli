import { Command } from 'commander'

export const command = new Command('start')
  .option('-w', '--watch')
  .description('Create a new Kompact project')
  .action(projectName => {
    const currentPath = process.cwd()
    console.log(`projectName:: ${projectName}`)
    console.log(`currentPath:: ${currentPath}`)
  })
