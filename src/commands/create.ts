import { Command } from 'commander'
import path from 'path'
import { execSync } from 'child_process'
import { copyDirectory } from '../utils/copy'

export const command = new Command('create')
  .argument('<project-name>', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(projectName => {
    const currentPath = process.cwd()
    const projectPath =
      projectName === '.' ? currentPath : path.join(currentPath, projectName)
    console.log(__dirname)
    const templateDir = path.join(__dirname, '../../templates/project')
    copyDirectory(templateDir, projectPath)

    // Optionally, run npm install in the new project directory
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' })

    console.log(`Project created at ${projectPath}`)
  })
