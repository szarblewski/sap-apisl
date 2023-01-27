const { sl, UserObjectsMD } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');

async function getObjects(headers) {
    try {
        
        sl.headers = headers;
        const response = await sl.get(UserObjectsMD.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getObject(headers, udoCode) {
    try {
        sl.headers = headers;
        const response = await sl.get(`${UserObjectsMD.sapObjectName}('${udoCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createObject(headers, object) {
    try {
        sl.headers = headers;
        const response = await sl.post(UserObjectsMD.sapObjectName, object);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateObject(headers, udoCode, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${UserObjectsMD.sapObjectName}('${udoCode}')`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function deleteObject(headers, udoCode) {
    try {
        sl.headers = headers;
        const response = await sl.delete(`${UserObjectsMD.sapObjectName}('${udoCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

const UserObjectsService = {
    getObjects,
    getObject,
    createObject,
    updateObject,
    deleteObject,
}

module.exports = UserObjectsService;