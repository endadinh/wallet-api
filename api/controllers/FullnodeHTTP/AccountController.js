'use strict'
const BASE_URL = process.env.BASE_URL
const http = require('http');
const util = require('util')
const axios = require('axios');
const { response } = require('express');
const { resourceLimits } = require('worker_threads');

module.exports = {
   createAccount: async (req,res) => { 
        const params = {
            owner_address: req.body.owner_address,
            account_address: req.body.account_address,
            visible: req.body.visible,
            permission_id: req.body.permission_id
        }
        let result = await axios.post(`${BASE_URL}/wallet/createaccount`,params)
                    .then( response => {
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    });
            res.json({status: result.status, data: result.data});    
    },
    getAccount: async (req,res) => { 
        const params = { 
            address: req.body.address,
            visible: req.body.visible
        }
        let result = await axios.post(`${BASE_URL}/wallet/getaccount`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    updateAccount: async (req,res) => { 
        const params = { 
            account_name: req.body.account_name,
            owner_address: req.body.owner_address,
            visible: req.body.visible,
            permission_id: req.body.permission_id
        }
        let result = await axios.post(`${BASE_URL}/wallet/updateaccount`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    AccountPermissionUpdate: async (req,res) => { 
        const params = { 
            owner_address: req.body.owner_address,
            actives: req.body.actives,
            owner: req.body.owner,
            witness: req.body.witness,
            visible: req.body.visible
        }
        let result = await axios.post(`${BASE_URL}/wallet/accountpermissionupdate`,params)
                    .then( response => { 
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        console.log(result)
        res.json({status: result.status, data: result.data });
    },

}