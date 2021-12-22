const data = require('../data');

const getById = function (_id) {
  return getAll().find((song) => song._id == _id);
};

const getAll = function () {
  return data.Songs;
};

module.exports = {
  getById,
  getAll,
};
