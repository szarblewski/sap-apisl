const express = require('express');
const router = express.Router();
const UserTableService = require('../../services/userTables/tables.service');

router.get('/userTables', getTables);
router.get('/userTables/:tableCode', getTable);
router.post('/userTables', createTable);
router.patch('/userTables/:tableCode', updateTable);
router.delete('/userTables/:tableCode', deleteTable);

async function getTables(req, res) {
    UserTableService.getTables(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getTable(req, res) {
    UserTableService.getTable(req.headers, req.params.tableCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createTable(req, res) {
    UserTableService.createTable(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateTable(req, res) {
    UserTableService.updateTable(req.headers, req.params.tableCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteTable(req, res) {
    UserTableService.deleteTable(req.headers, req.params.tableCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}



module.exports = router;