const data = require('../data');

const songsService = require('./songs.service');

const searchArtists = function (req) {
  console.log(req);
  return data.Artists;
}

const getArtists = function () {
  return data.Artists; 
}

const getArtistById = function (_id) {
  return getArtists().find((artist) => artist._id == _id);
}

const getSongsByArtistId = function (_id) {
  const songs = songsService.getAll();

  const song_ids = data.Artists_Songs.filter((row) => row.Artist_id == _id).map(
    (row) => row.Song_id
  );

  return songs.filter((song) => song_ids.includes(song._id));
};

module.exports = {
  searchArtists,
  getArtists,
  getArtistById,
  getSongsByArtistId,
};
