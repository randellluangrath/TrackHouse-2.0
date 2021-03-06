const express = require('express');

const router = express.Router({ mergeParams: true });

const songsController = require('../controllers/songs.controller');

router.route('/:_id').get(songsController.getById)

router.route('/').get(songsController.getAll);

module.exports = router;