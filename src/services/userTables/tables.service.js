const {sl, UserTablesMD} = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');

async function getTables(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(UserTablesMD.sapObjectName);       
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getTable(headers, tableCode) {
    try {
        //console.log(tableCode);
        sl.headers = headers;
        const response = await B1AppDomain.sl.get(`${UserTablesMD.sapObjectName}('${tableCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createTable(headers, table) {
    try {
        sl.headers = headers;
        const response = await B1AppDomain.sl.post(UserTablesMD.sapObjectName, table);
        //console.log(response);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateTable(headers, tableCode, description) {
    try {
        sl.headers = headers;
        const response = await B1AppDomain.sl.patch(`${UserTablesMD.sapObjectName}('${tableCode}')`, description);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function deleteTable(headers, tableCode) {
    try {
        sl.headers = headers;
        const response = await B1AppDomain.sl.delete(`${UserTablesMD.sapObjectName}('${tableCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

const UserTableService = {
    getTables,
    getTable,
    createTable,
    updateTable,
    deleteTable
}

module.exports = UserTableService