'use strict';
const middy = require('middy');
const { cors } = require('middy/middlewares');
const AWS = require('aws-sdk')

var handler = async event => {
  var ddb = new AWS.DynamoDB()

  return await new Promise((resolve, reject) => {
    ddb.getItem({
      TableName: 'macmardb', Key: {
        "id": {
          S: "200300400"
        },
      }
    }, (err, data) => {
      if (err) console.log(err, 'hello error');
      else resolve({ "M": data.Item })
    })
  })
};
module.exports.hello = middy(handler).use(cors());