const { sl, UserFieldsMD } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');

async function getFields(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(UserFieldsMD.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}


async function getField(headers, tableCode, fieldCode) {
    try {
        sl.headers = headers;
        const response = await sl.get(`${UserFieldsMD.sapObjectName}(TableName='${tableCode}', FieldID=${fieldCode})`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createField(headers, field) {
    try {
        sl.headers = headers;
        const response = await sl.post(UserFieldsMD.sapObjectName, field);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateField(headers, tableCode, fieldCode, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${UserFieldsMD.sapObjectName}(TableName='${tableCode}', FieldID=${fieldCode})`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
   
}

async function deleteField(headers, tableCode, fieldCode) {
    try {
        sl.headers = headers;
        const response = await sl.delete(`${UserFieldsMD.sapObjectName}(TableName='${tableCode}', FieldID=${fieldCode})`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

const UserFieldsService = {
    getFields,
    getField,
    createField,
    updateField,
    deleteField,
};

module.exports = UserFieldsService;