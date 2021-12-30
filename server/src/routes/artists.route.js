const express = require('express');

const router = express.Router({ mergeParams: true });

const artistsController = require('../controllers/artists.controller');

router.route('/search').post(artistsController.searchArtists);

router.route('/').get(artistsController.getArtists);

router.route('/:_id').get(artistsController.getArtistById);

router.route('/:_id/songs').get(artistsController.getSongsByArtistId);

module.exports = router;
