'use strict'

/* eslint-env mocha */

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { exportKeys } = require('..')

describe('eth.decode.keystore tests', () => {
  describe('exportKeys tests', () => {
    it('should export v3 keystore content', async () => {
      const fpath = path.join(__dirname, 'UTC--2021-10-19T21-44-58.643529923Z--8c3fec26f938d7f5b80ce156ecfb21297818e594')
      const data = fs.readFileSync(fpath, { encoding: 'utf-8' })
      const pwd = '123456'

      const res = await exportKeys(data, pwd)
      assert.strictEqual(res.address, '0x8c3fec26f938d7f5b80ce156ecfb21297818e594')
      assert.strictEqual(res.privkey, '0xbdc3816942af6e5ee6c6048bbc5ed9ce5f6c0f259aa3fc9faf57799a0b29970c')
      assert.strictEqual(res.pubkey, '0xc946c82b180620b460f5f60532f2ef486f61c7d781e58809431fe3c0ca58cf8ce126ba1f5d96ceb3327b8ad721180f8171e489745d152904cb6394e76263fe0d')
    }).timeout(7000)
  })
})
