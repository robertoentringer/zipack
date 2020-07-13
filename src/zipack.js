#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const error = (err) => {
  console.error(`${err.message}\n`)
  process.exit()
}

const file = process.argv.slice(2)[0] || error(new Error('Manifest file is missing or unreadable'))

const filename = (() => {
  try {
    const { name, version } = JSON.parse(fs.readFileSync(file, 'utf-8'))
    if (name && version) return `${name} v${version}.zip`
    error(new Error(`Required value 'name or version' is missing or invalid.`))
  } catch (err) {
    error(err)
  }
})()

const stream = fs.createWriteStream(filename)
stream.on('open', () => console.info(`Zipping... ${filename}`))
stream.on('close', () => console.info('Zip ok!', '\n'))
stream.on('error', error)

const archive = archiver('zip', { zlib: { level: 9 } })
archive.directory(path.dirname(file), false)
archive.on('error', error)
archive.pipe(stream)
archive.finalize()
