const fs = require('fs')
const path = require('path')

const rm = (dir) => {
  if (!fs.existsSync(dir))
    return
  fs.readdirSync(dir).forEach(file => {
    let child = path.resolve(dir, file)
    if (fs.statSync(child).isDirectory())
      rm(child)
    else
      fs.unlinkSync(child)
  })
  fs.rmdirSync(dir)
}

rm(path.resolve(__dirname, '..', 'dist'))
