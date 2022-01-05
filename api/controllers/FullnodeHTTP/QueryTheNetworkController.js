'use strict'
const BASE_URL = process.env.BASE_URL
const http = require('http');
const util = require('util')
const axios = require('axios');
const { response } = require('express');

module.exports = {
   getBlockByNum: async (req,res) => { 
        const params = {
            num: req.body.num,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getblockbynum`,params)
                    .then( response => {
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    });
            res.json({status: result.status, data: result.data});    
    },
    getBlockById: async (req,res) => { 
        const params = { 
            value: req.body.value,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getblockbyid`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    getBlockByLatestNum: async (req,res) => { 
        const params = { 
            num: req.body.num,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getblockbylatestnum`,params)
                    .then( response => { 
                        return response
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    getBlockByLimitNext: async (req,res) => { 
        const params = { 
            startNum: req.body.startNum,
            endNum: req.body.endNum,
        }
        let result = await axios.post(`${BASE_URL}/wallet/getblockbylimitnext`,params)
                    .then( response => { 
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data });
    },
    getNowBlock: async (req, res) => { 
        let result = await axios.get(`${BASE_URL}/wallet/getnowblock`)
                    .then(response => { 
                        return response;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data})
    },
    getTransactionInfoById: async ( req, res ) => { 
        const params = { 
            value: req.body.value
        }
        let result = await axios.post(`${BASE_URL}/wallet/gettransactioninfobyid`,params)
                    .then(response => { 
                        return response;
                    }) 
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data})
    }
    

}