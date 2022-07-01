// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.get(/access-handler/, function (req, res) {
    if (req.query.keys === "yes")  {
     res.redirect('/keys-on/start');
   } else {
     res.redirect('/keys-off/start');
   }
  });

  router.get(/email-handler/, function (req, res) {
    if (req.query.email === "yes")  {
     res.redirect('/keys-on/email');
   } else {
     res.redirect('/keys-on/start-date');
   }
  });

module.exports = router;
