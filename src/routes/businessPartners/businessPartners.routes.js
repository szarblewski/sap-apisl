const express = require('express');
const router = express.Router();
const BusinessPartnersService = require('../../services/businessPartners/businessPartners.service');

router.get('/businessPartners', getBusinessPartners);
router.get('/businessPartners/:cardCode', getBusinessPartner);
router.post('/businessPartners', createBusinessPartner);
router.patch('/businessPartners/:cardCode', updateBusinessPartner);
router.delete('/businessPartners/:cardCode', deleteBusinessPartner);

async function getBusinessPartners(req, res) {
    BusinessPartnersService.getBusinessPartners(req.headers).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function getBusinessPartner(req, res) {
    BusinessPartnersService.getBusinessPartner(req.headers, req.params.cardCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function createBusinessPartner(req, res) {
    BusinessPartnersService.createBusinessPartner(req.headers, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function updateBusinessPartner(req, res) {
    BusinessPartnersService.updateBusinessPartner(req.headers, req.params.cardCode, req.body).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function deleteBusinessPartner(req, res) {
    BusinessPartnersService.deleteBusinessPartner(req.headers, req.params.cardCode).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = router;