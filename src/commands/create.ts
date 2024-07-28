import { Command } from 'commander'
import path from 'path'

export const command = new Command('create')
  .argument('<project-name>', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(projectName => {
    const currentPath = process.cwd()
    const projectPath =
      projectName === '.' ? currentPath : path.join(currentPath, projectName)

    console.log(`projectName:: ${projectName}`)
    console.log(`currentPath:: ${currentPath}`)
  })
