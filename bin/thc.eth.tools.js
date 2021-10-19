#!/usr/bin/env node

'use strict'

process.argv[1] = 'thc-eth-tools' // fix usage name in yargs

const prompt = require('prompt')
const { cmds, yargs } = require('./yargs')
const { exportKeys, loadFile } = require('..')

const main = async () => {
  const argv = yargs.argv
  const [cmd] = argv._
  if (!cmds.includes(cmd)) throw new Error('ERR_CMD_NOT_SUPPORTED')

  if (cmd === 'export-keystore') {
    const data = (await loadFile(argv.file)).toString('utf-8')
    prompt.start()
    const { password: pwd } = await prompt.get({ properties: { password: { hidden: true } } })

    const res = await exportKeys(data, pwd)
    console.log('address', res.address)
    console.log('privkey', res.privkey)
    console.log('pubkey', res.pubkey)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
