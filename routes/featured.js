const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200).render("featured", {
    route: "featured",
  });
});

module.exports = router;
