'use strict'

const thcTools = require('../')
const fs = require('fs')
const path = require('path')

const main = async () => {
  const content = fs.readFileSync(path.join(__dirname, 'my_keystore'), { encoding: 'utf-8' })
  const pwd = '123456'
  const key = await thcTools.exportKeys(content, pwd)
  console.log('address', key.address)
  console.log('privkey', key.privkey)
  console.log('pubkey', key.pubkey)
}

main().catch(console.error)
