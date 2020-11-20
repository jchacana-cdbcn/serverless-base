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
      if (err) console.log(err, 'helloooooo error');
      else resolve({ "statusCode": 200, "body": JSON.stringify({ "M": data.Item }) })
    })
  })
};
module.exports.hello = middy(handler).use(cors());