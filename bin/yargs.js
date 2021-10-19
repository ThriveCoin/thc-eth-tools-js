'use strict'

const pkg = require('../package.json')

const yargs = require('yargs')
  .command(
    'export-keystore',
    'exports public and private key from v3 keystore file',
    (y) => y.option('file', { alias: 'f', type: 'string', esc: 'keystore file', demandOption: true })
  )
  .demandCommand()
  .recommendCommands()
  .version(pkg.version)
  .help()

const cmds = ['export-keystore']

module.exports = { cmds, yargs }
