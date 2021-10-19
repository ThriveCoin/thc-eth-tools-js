'use strict'

const ejsWallet = require('ethereumjs-wallet')

/**
 * @param {string} data
 * @param {string} pwd
 *
 * @returns {Promise<{ address: string, pubkey: string, privkey: string }>}
 */
const exportKeys = async (data, pwd) => {
  const key = await ejsWallet.default.fromV3(data, pwd)
  const pubkey = key.getPublicKeyString()
  const privkey = key.getPrivateKeyString()
  const address = key.getAddressString()

  return { address, pubkey, privkey }
}

module.exports = {
  exportKeys
}
