'use strict'
const BASE_URL = process.env.BASE_URL
const http = require('http');
const util = require('util')
const axios = require('axios');
const { response } = require('express');

module.exports = {
   getTransactionSign: async (req,res) => { 
            const params = {
                transaction: req.body.transaction,
                privateKey: req.body.privateKey
            }
            let result = await axios.post(`${BASE_URL}/wallet/gettransactionsign`,params)
                        .then( response => {
                            return response;
                        })
                        .catch(error => { 
                            return Promise.reject(error);
                        });
            console.log(response);
            res.json({status: result.stats, data: result.data});    
    }
}