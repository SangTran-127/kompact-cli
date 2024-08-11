import { Command } from 'commander'
import path from 'path'
import { execSync } from 'child_process'
import { copyDirectory } from '../utils/copy'
import { select } from '@inquirer/prompts'

type PackageManager = 'npm' | 'yarn' | 'pnpm'

enum EPackageManager {
  Npm = 'npm',
  Yarn = 'yarn',
  Pnpm = 'pnpm',
}

export const command = new Command('create')
  .argument('<project-name>', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(projectName => {
    // const packageType =
    createProjectFromTemplate(projectName, 'npm')
    // // Optionally, run npm install in the new project directory
    // execSync('npm install', { cwd: projectPath, stdio: 'inherit' })
  })

async function promptPackageManager(): Promise<string> {
  const answers = await select({
    message: 'Which package manager would you like to use?',
    choices: [
      {
        name: 'npm',
        value: 'npm',
        description: 'npm is the most popular package manager',
      },
      {
        name: 'yarn',
        value: 'yarn',
        description: 'yarn is an awesome package manager',
      },
    ],
    // default: 'npm',
  })

  return answers
}

function createProjectFromTemplate(
  projectName: string,
  packageManager: PackageManager
) {
  const currentPath = process.cwd()
  const projectPath =
    projectName === '.' ? currentPath : path.join(currentPath, projectName)
  console.log(__dirname)
  const templateDir = path.join(__dirname, '../../templates/project')
  copyDirectory(templateDir, projectPath)
  console.log(`Project created at ${projectPath}`)
}
