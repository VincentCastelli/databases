var models = require('../models');
var parser = require('body-parser');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    
    post: function (req, res) {
      models.users.post(req.body, (statusCode) => {
        statusCode = statusCode || 201;
        res.writeHead(statusCode, headers);
        res.end();
      });
    }
  }
};

