const express = require("express");
const router = express.Router();

router.get("/:slug", function (req, res, next) {
  const { slug } = req.params;
  if (slug === "test") {
    res.status(200).send(slug);
  } else {
    next();
  }
});

module.exports = router;
