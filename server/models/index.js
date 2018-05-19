var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    
    post: function (obj) {
      console.log('--------------------------->', obj.username);
      db.connectDB.connect();
      var insert = `INSERT into users Value(${obj.username})`;
      var queryArgs = [];
      
      db.connectDB.query(insert, queryArgs, (err) => {
        // if (err) {
        //   throw err;
        // }
      });
    }
  }
};

