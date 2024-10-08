import { Command } from 'commander'
import path from 'path'
import fs from 'fs'
import url from 'url'
import { execSync } from 'child_process'
import { copyDirectory } from '../utils/index.js'
import { input, select } from '@inquirer/prompts'
import figlet from 'figlet'
import gradient from 'gradient-string'
import chalk from 'chalk'

type PackageManager = 'npm' | 'yarn' | 'pnpm'

enum EPackageManager {
  Npm = 'npm',
  Yarn = 'yarn',
  Pnpm = 'pnpm',
}

export const command = new Command('create')
  .argument('[project-name]', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(async projectName => {
    const packageType = await promptPackageManager()
    const name = projectName || (await promptProjectName())
    createProjectFromTemplate(name, packageType)
    figlet('Kompact', (err, data) => {
      if (err) {
        console.log(chalk.red('Something went wrong...'))
        console.dir(err)
        return
      }
      console.log(gradient.teen(data))
    })
  })

async function promptPackageManager(): Promise<PackageManager> {
  const answers = await select<PackageManager>({
    message: 'Which package manager would you like to use?',
    choices: [
      {
        name: EPackageManager.Npm,
        value: EPackageManager.Npm,
        description: 'Most popular package manager',
      },
      {
        name: EPackageManager.Yarn,
        value: EPackageManager.Yarn,
        description: 'Awesome package manager',
      },
      {
        name: EPackageManager.Pnpm,
        value: EPackageManager.Pnpm,
        description: 'Fast, disk space efficient package manager',
      },
    ],
    default: EPackageManager.Npm,
  })

  return answers
}

async function promptProjectName(): Promise<string> {
  const answers = await input({
    message: 'Enter your project',
  })

  return answers
}

function createProjectFromTemplate(
  projectName: string,
  packageManager: PackageManager
) {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const currentPath = process.cwd()
  const projectPath =
    projectName === '.' ? currentPath : path.join(currentPath, projectName)
  const templateDir = path.join(__dirname, '../../templates/project')
  copyDirectory(templateDir, projectPath)
  execSync(packageCommand[packageManager].install, {
    cwd: projectPath,
    stdio: 'inherit',
  })
  // change project name project
  const packageJsonPath = path.join(projectPath, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  packageJson.name = projectName
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

const packageCommand = {
  npm: {
    install: 'npm install',
  },
  yarn: {
    install: 'yarn',
  },
  pnpm: {
    install: 'pnpm install',
  },
}
