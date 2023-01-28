const express = require('express');
const router = express.Router();
const ItemsService = require('../../services/items/items.service');

router.get('/items', getItems);
router.get('/items/:itemCode', getItemsByItemCode);
router.post('/items', createItem);
router.patch('/items/:itemCode', updateItem);
router.delete('/items/:itemCode', deleteItem);
router.post('/items/:itemCode/cancel', cancelItem);

async function getItems(req, res) {
    ItemsService.getItems(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getItemsByItemCode(req, res) {
    ItemsService.getItemsByItemCode(req.headers, req.params.itemCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createItem(req, res) {
    ItemsService.createItem(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateItem(req, res) {
    ItemsService.updateItem(req.headers, req.params.itemCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteItem(req, res) {
    ItemsService.deleteItem(req.headers, req.params.itemCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function cancelItem(req, res) {
    ItemsService.cancelItem(req.headers, req.params.itemCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;
