const express = require('express');
const router = express.Router();
const UserObjectsService = require('../../services/userTables/objects.service');

router.get('/userObjects', getAllObjects);
router.get('/userObjects/:objectCode', getObject);
router.post('/userObjects', createObject);
router.patch('/userObjects/:objectCode', updateObject);
router.delete('/userObjects/:objectCode', deleteObject);

async function getAllObjects(req, res) {
    UserObjectsService.getObjects(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getObject(req, res) {
    UserObjectsService.getObject(req.headers, req.params.objectCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createObject(req, res) {
    UserObjectsService.createObject(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateObject(req, res) {
    UserObjectsService.updateObject(req.headers, req.params.objectCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteObject(req, res) {
    UserObjectsService.deleteObject(req.headers, req.params.objectCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;

