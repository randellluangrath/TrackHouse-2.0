const artistsService = require('../services/artists.service');

const searchArtists = function (req, res) {
  res.send(artistsService.searchArtists(req));
};

const getArtists = function (req, res) {
  res.send(artistsService.getArtists());
};

const getArtistById = function (req, res) {
  res.send(artistsService.getArtistById(req.params._id));
};

// get all songs by artist id
const getSongsByArtistId = function (req, res) {
  res.send(artistsService.getSongsByArtistId(req.params._id));
};

module.exports = {
  searchArtists,
  getArtists,
  getArtistById,
  getSongsByArtistId,
};
