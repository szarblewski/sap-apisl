const { sl, Items } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');


async function getItems(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(Items.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getItemsByItemCode(headers, itemCode) {
    try {
        sl.headers = headers;
        const response = await sl.get(`${Items.sapObjectName}('${itemCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createItem(headers, data) {
    try {
        sl.headers = headers;
        const response = await sl.post(Items.sapObjectName, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateItem(headers, itemCode, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${Items.sapObjectName}('${itemCode}')`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function deleteItem(headers, itemCode) {
    try {
        sl.headers = headers;
        const response = await sl.delete(`${Items.sapObjectName}('${itemCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function cancelItem(headers, itemCode) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${Items.sapObjectName}('${itemCode}')/Cancel`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}


const ItemsService = {
    getItems,
    getItemsByItemCode,
    createItem,
    updateItem,
    deleteItem,
    cancelItem,
};

module.exports = ItemsService;
