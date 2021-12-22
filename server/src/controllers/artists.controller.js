const artistsService = require('../services/artists.service');

// get all songs by artist id
const getSongsByArtistId = function (req, res) {
  res.send(artistsService.getSongsByArtistId(req.params._id));
};

module.exports = {
  getSongsByArtistId,
};
