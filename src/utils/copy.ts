import fs from 'fs'
import path from 'path'

export function copyDirectory(src: string, dest: string, projectName: string) {
  fs.mkdirSync(dest, { recursive: true })

  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    console.log(entry.name)
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath, projectName)
    } else {
      // change the projectName
      if (entry.name === 'package.json') {
        const packageJsonPath = path.resolve(destPath)
        console.log(`packageJsonPath:: `, packageJsonPath)
        // parse json
        const packageJson = JSON.parse(
          fs.readFileSync(packageJsonPath, 'utf-8')
        )
        packageJson.name = projectName
        console.log(packageJson)
        fs.writeFileSync(dest, JSON.stringify(packageJson))
      }
      fs.copyFileSync(srcPath, destPath)
    }
  }
}
