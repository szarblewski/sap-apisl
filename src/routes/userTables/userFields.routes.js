const express = require('express');
const router = express.Router();
const UserFieldsService = require('../../services/userTables/fields.service');

router.get('/userFields', getFields);
router.get('/userFields/:tableCode/:fieldCode', getField);
router.post('/userFields', createField);
router.patch('/userFields/:tableCode/:fieldCode', updateField);
router.delete('/userFields/:tableCode/:fieldCode', deleteField);

async function getFields(req, res) {
    UserFieldsService.getFields(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getField(req, res) {
    UserFieldsService.getField(req.headers, req.params.tableCode, req.params.fieldCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createField(req, res) {
    UserFieldsService.createField(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateField(req, res) {
    UserFieldsService.updateField(req.headers, req.params.tableCode, req.params.fieldCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteField(req, res) {
    UserFieldsService.deleteField(req.headers, req.params.tableCode, req.params.fieldCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;
