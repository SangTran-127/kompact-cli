import { program } from 'commander'

program
  .command('create <project-name>')
  .description('Create a new Kompact project')
  .action(projectName => {
    console.log(`projectName ${projectName}`)
  })
