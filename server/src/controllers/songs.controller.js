const songsService = require('../services/songs.service');

// get song by id
const getById = function (req, res) {
  res.send(songsService.getById(req.params._id));
};

// get all songs by artist id
const getAllByArtistId = function (req, res) {
  res.send(songsService.getAllByArtistId(req.params._id));
};

// true get all
const getAll = function (req, res) {
  console.log('hi');
  res.send(songsService.getAll());
};

module.exports = {
  getById,
  getAllByArtistId,
  getAll,
};
