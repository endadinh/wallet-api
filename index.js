const express = require('express');
const TronWeb = require('tronweb');
const TronGrid = require('trongrid');
const bip39 = require('bip39');
const path = require('path');
const http = require('http');
let BIP32Factory  = require('bip32').default
// const reload = require('reload');



const app = express();
const port = 3030;

app.get('/',async (req,res) => { 
    


    // Define own Node
    const FullNode = "http://42.117.2.215:8090";
    const SolidityNode= "http://42.117.2.215:8091";
    const TronScanAPI = "https://apilist.tronscan.org/api/account";

    // Constructor Tron-web
    const tronWeb = new TronWeb({ 
        fullNode: FullNode,
        solidityNode: SolidityNode
    });
    
    // Define Tron-grid API resource
    const tronGridAPI = new TronWeb({ 
        fullHost: 'https://api.trongrid.io'
    })
    // Constructor Tron-grid
    const tronGrid = new TronGrid(tronGridAPI);

    // Get Data for UI
    async function getData() { 

        // Define variables
        const address = 'TU9Yc5X5wu8GzEYm7eS52tzHyH6ze3vL9X';
        const privateKey = '13eaa842c26e58b8cad148cd6d5d5ec94532d2881d66a4f0d4a5050e23eb7725'
        const to_address = 'TUa3A8RkPB5W5VJmnyC8kN3bcDQdtkZJ2e'
     
        // generate new account resource
        const generateAccount = await tronWeb.utils.accounts.generateAccount();
     
        // create new account
        const newAccount= await tronWeb.createAccount(generateAccount);
     
        // get Account info ( all )
        // const AccountInfo = await tronWeb.trx.getAccount('TU9Yc5X5wu8GzEYm7eS52tzHyH6ze3vL9X');
        // const AssetV2 = AccountInfo.assetV2;
        // var sum = AccountInfo.balance;
        // await AssetV2.map(item=> { 
        //     sum+=item.value
        // })
        // if(!AccountInfo.address) { 
        //     console.log("This account didn't active yet");
        // }
     
        // get Transaction send from address
        // const transactionFrom = await tronGrid.account.getTransactions(address,{only_from: true});
     
        // get Transaction send to address
        // const transactionTo = await tronGrid.account.getTransactions(address,{only_to: true})

        // get balance of address
        // const Balance = await tronWeb.trx.getBalance(address);
        // const params = { 
        //     address: "TU9Yc5X5wu8GzEYm7eS52tzHyH6ze3vL9X"
        // }
        // const  AccountDetail = await axios.get(`${TronScanAPI}`,params);


        // const Contract = await await tronWeb.contract().at("TU9Yc5X5wu8GzEYm7eS52tzHyH6ze3vL9X");
   
        // send transaction to to_address account
        // var amount = 0.0001;
        // var wei = amount * Math.pow(10,6);
        // const sendTransaction = await tronWeb.trx.sendTransaction(to_address,wei,privateKey);    
        // const tradeObj = await tronWeb.transactionBuilder.sendTrx(to_address,100,address);
        // const sendTransaction = await tronWeb.trx.sign(tradeObj, privateKey);
        // const mnemonic = await bip39.generateMnemonic(128);
        // const seed = await bip39.mnemonicToSeed(mnemonic);
        // const node = await import('tiny-secp256k1').then(ecc => BIP32Factory(ecc)).then(bip32 => { 
        // const node = bip32.fromSeed(seed)
        // return node;
        // });
        // const child = await node.derivePath(`m/44'/195'/0'/0/0`);
        // const privateKey = await child.privateKey.toString('hex');
        // const address = await TronWeb.address.fromPrivateKey(privateKey);
        // const account= await tronWeb.trx.getAccount(address);
        // const bandwidth = await tronWeb.trx.getBandwidth("TU9Yc5X5wu8GzEYm7eS52tzHyH6ze3vL9X");
        const AccountResource = await tronWeb.trx.getTransactionInfo('50df0aa02695d0adbc7df9ed14bdb230627b9f1847c210bcfb392bbcebfa4f72');
        const result = { 
            newAccount: { 
                privateKey: newAccount.privateKey,
                address: newAccount.address,
                publicKey: newAccount.publicKey,
            },
            Account: AccountResource,
            // privateKey: privateKey,
            // Address: address,
            // Account: account,
            // Asset: account.assetV2,
            // Sum : sum
            // transactionFrom: transactionFrom.data,
            // transactionTo: transactionTo.data,
            // Balance: Balance,
            // AccountDetail: AccountDetail
            // Contract: Contract
            // sendTransactionStatus: sendTransaction

        }
        return result;
    }

    // response
    const response = await getData().then((result) => {
        if (typeof result != 'string') {
            result = JSON.stringify(result, undefined, 2);
        }
        result = result.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return JSON.stringify(JSON.parse(result),null,2);

    });
    res.send(response)

}) 

// var server = http.createServer(app)

// reload(server, app, 100)

app.listen(port, () => { 
    console.log(`Listen on ${port}!`);
});