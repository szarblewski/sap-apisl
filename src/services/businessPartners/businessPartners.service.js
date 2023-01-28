const { sl, BusinessPartners } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');


async function getBusinessPartners(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(BusinessPartners.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getBusinessPartner(headers, cardCode) {
    try {
        sl.headers = headers;
        const response = await sl.get(`${BusinessPartners.sapObjectName}('${cardCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createBusinessPartner(headers, data) {
    try {
        sl.headers = headers;
        const response = await sl.post(BusinessPartners.sapObjectName, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateBusinessPartner(headers, cardCode, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${BusinessPartners.sapObjectName}('${cardCode}')`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function deleteBusinessPartner(headers, cardCode) {
    try {
        sl.headers = headers;
        const response = await sl.delete(`${BusinessPartners.sapObjectName}('${cardCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}



const BusinessPartnersService = {
    getBusinessPartners,
    getBusinessPartner,
    createBusinessPartner,
    updateBusinessPartner,
    deleteBusinessPartner,
};

module.exports = BusinessPartnersService;

