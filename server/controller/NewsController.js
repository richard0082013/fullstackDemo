const News = require("../models/News");

module.exports = {
  create: (params, cb) => {
    News.create(params, (err, result) => {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, result);
    });
  },
  find: (params, cb) => {
    News.find(params, "_id title teaser", (err, results) => {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, results);
    });
  },
  findById: (id, cb) => {
    News.findById(id, (err, results) => {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, results);
    });
  }
};
