const { sl, Invoices } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');

async function getInvoices(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(Invoices.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getInvoicesByDocEntry(headers, docEntry) {
    try {
        sl.headers = headers;
        const response = await sl.get(`${Invoices.sapObjectName}(${docEntry})`);    
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createInvoice(headers, data) {
    try {
        sl.headers = headers;
        const response = await sl.post(Invoices.sapObjectName, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateInvoice(headers, docEntry, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${Invoices.sapObjectName}(${docEntry})`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function closeInvoice(headers, docEntry) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${Invoices.sapObjectName}(${docEntry})/Close`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function cancelInvoice(headers, docEntry) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${Invoices.sapObjectName}(${docEntry})/Cancel`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function reopenInvoice(headers, docEntry) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${Invoices.sapObjectName}(${docEntry})/Reopen`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createCancellationDocument(headers, docEntry, data) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${Invoices.sapObjectName}(${docEntry})/CreateCancellationDocument`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}


const InvoicesService = {
    getInvoices,
    getInvoicesByDocEntry,
    createInvoice,
    updateInvoice,
    closeInvoice,
    cancelInvoice,
    reopenInvoice,
    createCancellationDocument
};



module.exports = InvoicesService;