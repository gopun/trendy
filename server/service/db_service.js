const config = require('../config/config');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

let collection = {
  user: require('../schema/user.model')
};

function aggregate(collection, query, callback) {
  collection[collection].aggregate(query).then(function(err, resp) {
    callback(err, resp)
  })
}

function getCount(collection, query, callback) {
  collection[collection].count(query).then(function(err, resp) {
    callback(err, resp)
  })
}

function insertDocument(collection, data, callback) {
  new collection[collection](data).save(function(err, results) {
    callback(err, results)
  });
}

function deleteDocument(collection, query, callback) {
  collection[collection].remove(query).then(function(err, resp) {
    callback(err, resp)
  })
}

function find(collection, query, project, options, callback) {
  if (options.populate) {
    collection[collection].find(query, project, options.options).populate(options.populate).exec(function(err, resp) {
      callback(err, resp)
    })
  } else {
    collection[collection].find(query, project, options).exec(function(err, resp) {
      callback(err, resp)
    })
  }
}

function findOne(collection, query, project, options, callback) {
  if (options.populate) {
    collection[collection].findOne(query, project, options.options).populate(options.populate).exec(function(err, resp) {
      callback(err, resp)
    })
  } else {
    collection[collection].findOne(query, project, options).exec(function(err, resp) {
      callback(err, resp)
    })
  }
}

function findOneAndUpdate(collection, query, data, options, callback) {
  collection[collection].findOneAndUpdate(query, data, options).exec(function(err, resp) {
    callback(err, resp)
  })
}

function update(collection, query, data, options, callback) {
  collection[collection].update(query, data, options).exec(function(err, resp) {
    callback(err, resp)
  })
}

function geoSearch(collection, query, options, callback) {
  collection[collection].geoSearch(query, options).exec(function(err, resp) {
    callback(err, resp)
  })
}

function insertMany(collection, query, data, callback) {
  collection[collection].insertMany(query, data).exec(function(err, resp) {
    callback(err, resp)
  })
}

module.exports = {
  aggregate: aggregate,
  getCount: getCount,
  insertDocument: insertDocument,
  delete: deleteDocument,
  find: find,
  findOne: findOne,
  findOneAndUpdate: findOneAndUpdate,
  update: update,
  geoSearch: geoSearch,
  insertMany: insertMany
};
