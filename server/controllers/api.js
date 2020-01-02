const express = require('express');
const postPreviewController = require('./api/postPreviewController');
const postAMPController = require('./api/postAMPController');

const router = express.Router();

router.get('/preview-posts/:uuid', postPreviewController);
router.get('/amp-posts/:slug', postAMPController);

module.exports = router;
