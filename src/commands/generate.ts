import { Command } from 'commander'

export const command = new Command('generate')
  .argument('<project-name>', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(projectName => {
    const currentPath = process.cwd()
    console.log(`projectName:: ${projectName}`)
    console.log(`currentPath:: ${currentPath}`)
  })
