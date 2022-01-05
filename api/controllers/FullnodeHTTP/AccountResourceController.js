'use strict'
const BASE_URL = process.env.BASE_URL
const http = require('http');
const util = require('util')
const axios = require('axios');
const { response } = require('express');
const { resourceLimits } = require('worker_threads');

module.exports = {
   getAccountResource: async (req,res) => { 
        const params = {
            address: req.body.address,
            visible: req.body.visible,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getaccountresource`,params)
                    .then( response => {
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    });
            res.json({status: result.status, data: result.data});    
    },
    getAccountNet: async (req,res) => { 
        const params = { 
            address: req.body.address,
            visible: req.body.visible
        }
        let result = await axios.post(`${BASE_URL}/wallet/getaccountnet`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    freezeBalance: async (req,res) => { 
        const params = { 
            owner_address: req.body.owner_address,
            frozen_balance: req.body.frozen_balance,
            frozen_duration: req.body.frozen_duration,
            resource: req.body.resource,
            receiver_address: req.body.receiver_address,
            permission_id: req.body.permission_id,
            visible: req.body.visible,
        }
        let result = await axios.post(`${BASE_URL}/wallet/freezebalance`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    unFreezeBalance: async (req,res) => { 
        const params = { 
            owner_address: req.body.owner_address,
            resource: req.body.resource,
            receiver_address: req.body.receiver_address,
            permission_id: req.body.permission_id,
            visible: req.body.visible,
        }
        let result = await axios.post(`${BASE_URL}/wallet/unfreezebalance`,params)
                    .then( response => { 
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        console.log(result)
        res.json({status: result.status, data: result.data });
    },
    getDelegatedResource: async (req,res) => { 
        const params = { 
            fromAddress: req.body.fromAddress,
            toAddress: req.body.toAddress,
            visible: req.body.visible,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getdelegatedresource`,params)
                    .then( response => { 
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        console.log(result)
        res.json({status: result.status, data: result.data });
    },
    getDelegatedResourceAccountIndex: async (req,res) => { 
        const params = { 
            value: req.body.value,
            visible: req.body.visible,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getdelegatedresourceaccountindex`,params)
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