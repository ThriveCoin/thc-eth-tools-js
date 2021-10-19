'use strict'

/* eslint-env mocha */

const assert = require('assert')
const path = require('path')
const { loadFile } = require('..')

describe('file.utils tests', () => {
  describe('loadFile tests', () => {
    it('should load absolute paths', async () => {
      const abspath = path.join(__dirname, 'UTC--2021-10-19T21-44-58.643529923Z--8c3fec26f938d7f5b80ce156ecfb21297818e594')
      const data = await loadFile(abspath)
      assert.strict(data instanceof Buffer, true)
      assert.strictEqual(data.length > 0, true)
    }).timeout(7000)

    it('should load relative paths', async () => {
      const relpath = './test/UTC--2021-10-19T21-44-58.643529923Z--8c3fec26f938d7f5b80ce156ecfb21297818e594'
      const data = await loadFile(relpath)
      assert.strict(data instanceof Buffer, true)
      assert.strictEqual(data.length > 0, true)
    }).timeout(7000)
  })
})
