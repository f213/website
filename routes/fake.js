const express = require("express");

const router = express.Router();

router.get(/^(.*)\.php$/i, (req, res) => {
  res.append("X-Powered-By", "PHP/5.0.4");
  res.append("Server", "Apache/1.3.37");

  res.render("fake/php");
});

router.get(/^\/wp-(.*)\//, (req, res) => {
  res.append("X-Powered-By", "PHP/5.0.4");
  res.append("Server", "Apache/1.3.37");

  res.send("<h1>Database connection error</h1>");
});

module.exports = router;
