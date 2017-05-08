// @ts-check
'use strict'

const prettier = require('./bundle.js')

console.log(prettier)

const sample = `function f (a,b) {return x; }`

const formatted = prettier.format(sample)

console.log('# INPUT\n' + sample)
console.log('# FORMATTED\n' + formatted)
