# thc-eth-tools-js

**`thc-eth-tools-js`** is a simple cross platform cli tool for ethereum network.

Currently supported features are:
- export key content from keystore file


## Installing

For usage as library run:
```console
npm install thc-eth-tools --save-prod
```

For usage as cli tool run:
```console
npm install thc-eth-tools --global
```


## Usage

CLI usage:
```console
thc-eth-tools <command>

Commands:
  thc-eth-tools export-keystore  exports public and private key from v3 keystore
                                 file

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]


thc-eth-tools export-keystore
Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -f, --file     keystore file                               [string] [required]
```

Code usage:
```javascript
const thcTools = require('thc-eth-tools')

const content = fs.readFileSync('my_keystore', { encoding: 'utf-8' })
const pwd = '123456'
const key = await thcTools.exportKeys(content, pwd)
console.log('address', key.address)
console.log('privkey', key.privkey)
console.log('pubkey', key.pubkey)
```

Additional detailed examples can be found in [examples folder](./examples).

## Testing

```console
npm run test
```


## Authors
- vigan-abd (vigan.abd@gmail.com)
