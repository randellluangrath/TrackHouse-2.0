const express = require('express');
const songs = require('./songs.route');

const router = express.Router();

router.use('/songs', songs);

router.get('/', (req, res) => res.send('Trackhouse API V2'));

router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
