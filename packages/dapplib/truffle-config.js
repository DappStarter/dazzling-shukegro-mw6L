require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind home install forest flush tourist'; 
let testAccounts = [
"0xb473bb4866f3138b61e0a8b33e7d2391fcaa29065ebf3cef9766474da9595ac3",
"0xc5b1036f3b8189dbf5fc31a5b5024f64b9426c7700a9e35273fd67d963f1114d",
"0xf3f9da39abed2105eb9aa130f486e483568a0038f10cc4398adbd27f5e810837",
"0x148269cccc02bf79f25ab4d23e3d70f653ac4ff39155b8eb45d8f920258e54ee",
"0xa28483e933ea0b2056da28272a0e0eafb13ebd169a63539307b841230cc175b1",
"0x140dcc293fe13e79dd084047f41015199de1f4516a283c5733dd98c9d9805899",
"0x3193806f350a98d929eb227bdae6ab4257a945acd7789d0a3fa34cf6aa728996",
"0xf4c7fb536597e52f0ddcc8b3eaa1b9de0753838d5cec4abea42c1767aaf7c968",
"0x48b2db2bb2cbcef46444ea18c91d6e0de32545a81bc6d9cc31a3968a1f38edaa",
"0x1745582d22607cd09c9c7e0ffdf857e477e61d9a6d28ce0f75cca5aa3d1a4522"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

