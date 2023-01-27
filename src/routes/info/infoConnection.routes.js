const express = require('express');
const authService = require('../../services/auth/auth.service');
const router = express.Router();

router.get('/infoConnection', infoConnection);

function infoConnection(req, res) {
    authService.infoConnection().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;