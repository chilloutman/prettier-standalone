// @ts-check
'use strict'

const fs = require('fs')
const path = require('path')

const bundle = path.join(__dirname, 'bundle.js')
const tmp = path.join(bundle + '.tmp')

const input = fs.readFileSync(bundle, 'utf8')
const lines = input.split('\n')

const output = fs.createWriteStream(tmp)
output.on('open', () => {
  for (const line of lines) {
    let replaced = line.replace(/(^|(\{) *)['"]use strict['"];/, '$1')
    if (line !== replaced) {
      console.log(`'${line}' -> '${replaced}'`)
    }
    output.write(replaced + '\n', 'utf8')
  }
  output.end()

  fs.rename(tmp, bundle, err => {
    if (err) throw err
  })
})
