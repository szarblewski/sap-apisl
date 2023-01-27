const express = require('express');
const router = express.Router();
const EnumServices = require('../../services/infoService/Enums.Service');

router.get('/BoUTBTableType', getBoUTBTableType);
router.get('/BoFldSubTypes', getBoFldSubTypes);
router.get('/BoFieldTypes', getBoFieldTypes);

async function getBoUTBTableType(req, res) {
    EnumServices.getBoUTBTableType().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getBoFldSubTypes(req, res) {
    EnumServices.getBoFldSubTypes().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getBoFieldTypes(req, res) {
    EnumServices.getBoFieldTypes().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;



