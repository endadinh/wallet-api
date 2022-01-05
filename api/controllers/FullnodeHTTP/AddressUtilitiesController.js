'use strict'
const BASE_URL = process.env.BASE_URL
const http = require('http');
const util = require('util')
const axios = require('axios')

module.exports = {
    generateAddress: async (req, res) => {
        let result = await axios.get(`${BASE_URL}/wallet/generateaddress`)
                    .then( response => {
                         return response;
                        })
                    .catch(error => { 
                        return Promise.reject(error);
                        });
        res.json({status: result.stats, data: result.data});    
    },
    createAddress: async (req,res) => { 
        let value = req.params.value;
        let result = await axios.get(`${BASE_URL}/wallet/createaddress`,value)
                    .then(res => { 
                        return res;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        res.json({status: result.status, data: result.data});
    },
    validateAddress: async ( req,res ) => { 
        let address = req.params.address;
        let result = await axios.post(`${BASE_URL}/wallet/validateaddress`,address)
                    .then(res => { 
                        return res;
                    })
                    .catch(error => { 
                        return Promise.reject(error);
                    })
        console.log(result)
        res.json({status: result.status, data: result.data})
    },

}