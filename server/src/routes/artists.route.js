const express = require('express');

const router = express.Router({ mergeParams: true });

const artistsController = require('../controllers/artists.controller');

router.route('/:_id/songs').get(artistsController.getSongsByArtistId);

module.exports = router;
