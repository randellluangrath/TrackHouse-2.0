const data = require('../data');

const getById = function (_id) {
  return getAll().find((song) => song._id == _id);
};

const getAllByArtistId = function (_id) {
  const songs = getAll();

  const song_ids = data.Artists_Songs.filter(
    (row) => row.Artist_id == _id
  ).map((row) => row.Song_id);

  return songs.filter((song) => song_ids.includes(song._id));
};

const getAll = function () {
  return data.Songs;
};

module.exports = {
  getById,
  getAllByArtistId,
  getAll,
};
