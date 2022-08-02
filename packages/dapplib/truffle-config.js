require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan random stick huge hockey problem equal gate'; 
let testAccounts = [
"0x87e361be20f8fb0318985789601a5fb6e82fd24d65b62e24b83588a066ba77d6",
"0x1c087ef158fd512a74ebb04cdc0f71425a0782084d0aef25e0297084dfcc74e2",
"0x0d9b303ed5f139b671cce9811617a7b2a1147fb155e8740c1b5000459d8d7d4b",
"0x2302875c6f6c8e27dbc3dbbd511d0f078ef2b6d5cfa7baf7ff58e54b5edacd37",
"0xa69142fd88cf3fc4233e570f62f961f5b5f86c821520fabc6ef7ba765b032690",
"0x02fec00cbbdee742604e4e434c90e1264e5d741de75752c3a66be5c847ee853b",
"0x90ebdee33e8d93e76f86c7fd2993c8e974dd228f2e466826f108807783fba37c",
"0x06f8ef6ea5b9d4dd5026e569abc1479a06707c58e8941e2da63a14409e762856",
"0x427677e063e6c3b00711d9fa42c06b103453eb794cf5b2127b6117882f2a4834",
"0x28f778512400654efbae13c592778d346d57abb25d618033bd17eafbb72b1019"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


