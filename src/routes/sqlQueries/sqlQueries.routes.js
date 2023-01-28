const express = require('express');
const router = express.Router();
const SQLQueriesService = require('../../services/sqlqueries/sql.service');

router.get('/sqlQueries', getSQLQueries);
router.get('/sqlQueries/:queryCode', getSQLQuery);
router.post('/sqlQueries', createSQLQuery);
router.patch('/sqlQueries/:queryCode', updateSQLQuery);
router.delete('/sqlQueries/:queryCode', deleteSQLQuery);

async function getSQLQueries(req, res) {
    SQLQueriesService.getSQLQueries(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getSQLQuery(req, res) {
    SQLQueriesService.getSQLQuery(req.headers, req.params.queryCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createSQLQuery(req, res) {
    SQLQueriesService.createSQLQuery(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateSQLQuery(req, res) {
    SQLQueriesService.updateSQLQuery(req.headers, req.params.queryCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteSQLQuery(req, res) {
    SQLQueriesService.deleteSQLQuery(req.headers, req.params.queryCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}


module.exports = router;