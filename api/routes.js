'use strict';
const addressUtilitiesCtrl = require('./controllers/FullnodeHTTP/AddressUtilitiesController');
const transactionsCtrl = require('./controllers/FullnodeHTTP/TransactionsController');
const AccountsCtrl = require('./controllers/FullnodeHTTP/AccountController');
const AccountResourcesCtrl = require('./controllers/FullnodeHTTP/AccountResourceController');
const QueryTheNetworkCtrl = require('./controllers/FullnodeHTTP/QueryTheNetworkController')
// const { createAddress } = require('./controllers/FullnodeHTTP/AddressUtilitiesController');

module.exports = function(app) {

    /**  Address utilities route */


    // generate address
    app.route('/wallet/generateaddress')
      .get(addressUtilitiesCtrl.generateAddress);

    //create address
    app.route('/wallet/createaddress')
      .post(addressUtilitiesCtrl.createAddress);

    //validate address
    app.route('/wallet/validateaddress')
      .post(addressUtilitiesCtrl.validateAddress);


    /**  Accounts */
    app.route('/wallet/createaccount')
      .post(AccountsCtrl.createAccount);

    app.route('/wallet/getaccount')
      .post(AccountsCtrl.getAccount);

    app.route('/wallet/updateaccount')
      .post(AccountsCtrl.updateAccount);
    
    app.route('/wallet/accountpermissionupdate')
      .post(AccountsCtrl.AccountPermissionUpdate);

    /** Accounts Resource */
    app.route('/wallet/getaccountresource')
      .post(AccountResourcesCtrl.getAccountResource);

    app.route('/wallet/getaccountnet')
      .post(AccountResourcesCtrl.getAccountNet);
    
    app.route('/wallet/freezebalance')
      .post(AccountResourcesCtrl.freezeBalance);

    app.route('/wallet/unfreezebalance')
      .post(AccountResourcesCtrl.unFreezeBalance);

    app.route('/wallet/getdelegatedresource')
      .post(AccountResourcesCtrl.getDelegatedResource);

    app.route('/wallet/getdelegatedresourceaccountindex')
      .post(AccountResourcesCtrl.getDelegatedResourceAccountIndex);

    /** Query the network */

    app.route('/wallet/getblockbynum')
      .post(QueryTheNetworkCtrl.getBlockByNum); 
    
    app.route('/wallet/getblockbyid')
      .post(QueryTheNetworkCtrl.getBlockById);

    app.route('/wallet/getblockbylatestnum')
      .post(QueryTheNetworkCtrl.getBlockByLatestNum);
 
    app.route('/wallet/getblockbylimitnext')
      .post(QueryTheNetworkCtrl.getBlockByLimitNext)
    
    app.route('/wallet/getnowblock')
      .get(QueryTheNetworkCtrl.getBlockByLimitNext)

    app.route('/wallet/gettransactioninfobyid')
      .post(QueryTheNetworkCtrl.getTransactionInfoById)

};