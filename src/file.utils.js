'use strict'

const fs = require('fs')
const path = require('path')

/**
 * @param {string} pathlike
 * @returns {Promise<Buffer>}
 */
const loadFile = async (pathlike) => {
  const fpath = path.resolve(pathlike)
  const data = await fs.promises.readFile(fpath)
  return data
}

module.exports = {
  loadFile
}
