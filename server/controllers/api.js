const express = require('express');
const postPreviewController = require('./api/postPreviewController');

const router = express.Router();

router.get('/preview-posts/:uuid', postPreviewController);

module.exports = router;
