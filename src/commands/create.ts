import { Command } from 'commander'
import path from 'path'
import { execSync } from 'child_process'
import { copyDirectory } from '../utils/copy'
import { select } from '@inquirer/prompts'
import figlet from 'figlet'
import gradient from 'gradient-string'

type PackageManager = 'npm' | 'yarn' | 'pnpm'

enum EPackageManager {
  Npm = 'npm',
  Yarn = 'yarn',
  Pnpm = 'pnpm',
}

export const command = new Command('create')
  .argument('<project-name>', 'Name of the project or use . for current folder')
  .description('Create a new Kompact project')
  .action(async projectName => {
    const packageType = await promptPackageManager()
    createProjectFromTemplate(projectName, packageType)
    figlet('Kompact', (err, data) => {
      if (err) {
        console.log('Something went wrong...')
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

function createProjectFromTemplate(
  projectName: string,
  packageManager: PackageManager
) {
  const currentPath = process.cwd()
  const projectPath =
    projectName === '.' ? currentPath : path.join(currentPath, projectName)
  const templateDir = path.join(__dirname, '../../templates/project')
  copyDirectory(templateDir, projectPath, projectName)
  execSync(packageCommand[packageManager].install, {
    cwd: projectPath,
    stdio: 'inherit',
  })
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
