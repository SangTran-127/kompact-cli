import fs from 'fs'
import path from 'path'

export function copyDirectory(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true })

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}
