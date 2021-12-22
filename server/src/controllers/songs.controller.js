const songsService = require('../services/songs.service');

// get song by id
const getById = function (req, res) {
  res.send(songsService.getById(req.params._id));
};

// true get all
const getAll = function (req, res) {
  res.send(songsService.getAll());
};

module.exports = {
  getById,
  getAll,
};
