// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.get(/access-handler/, function (req, res) {
    if (req.query.keys === "yes")  {
     res.redirect('/v2/keys-on/start');
   } else {
     res.redirect('/v2/keys-off/start');
   }
  });

  router.get(/key-handler/, function (req, res) {
    if (req.query.keys === "yes")  {
     res.redirect('start');
   } else {
     res.redirect('start');
   }
  });

  router.get(/key-v4/, function (req, res) {
    if (req.query.keys === "cert-1")  {
     res.redirect('start');
   } else {
     res.redirect('start');
   }
  });

  router.get(/email-handler/, function (req, res) {
    if (req.query.email === "yes")  {
     res.redirect('/keys-on/email');
   } else {
     res.redirect('/keys-on/start-date');
   }
  });



  router.get(/different-exemption/, function (req, res) {
    if (req.query.exemption === "no")  {
     res.redirect('cannot-confirm-entitlement');
   } else {
     res.redirect('check-personal-details');
   }
  });

module.exports = router;
