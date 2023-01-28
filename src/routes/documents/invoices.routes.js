const express = require('express');
const router = express.Router();
const InvoicesService = require('../../services/documents/invoices.service');

router.get('/invoices', getInvoices);
router.get('/invoices/:docEntry', getInvoicesByDocEntry);
router.post('/invoices', createInvoice);
router.patch('/invoices/:docEntry', updateInvoice);
router.post('/invoices/:docEntry/close', closeInvoice);
router.post('/invoices/:docEntry/cancel', cancelInvoice);
router.post('/invoices/:docEntry/reopen', reopenInvoice);
router.post('/invoices/:docEntry/CreateCancellationDocument', createCancellationDocument);


async function getInvoices(req, res) {
    InvoicesService.getInvoices(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getInvoicesByDocEntry(req, res) {
    InvoicesService.getInvoicesByDocEntry(req.headers, req.params.docEntry).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createInvoice(req, res) {
    InvoicesService.createInvoice(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateInvoice(req, res) {
    InvoicesService.updateInvoice(req.headers, req.params.docEntry, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function closeInvoice(req, res) {
    InvoicesService.closeInvoice(req.headers, req.params.docEntry).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function cancelInvoice(req, res) {
    InvoicesService.cancelInvoice(req.headers, req.params.docEntry).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function reopenInvoice(req, res) {
    InvoicesService.reopenInvoice(req.headers, req.params.docEntry).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createCancellationDocument(req, res) {
    InvoicesService.createCancellationDocument(req.headers, req.params.docEntry, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}


module.exports = router;