const { sl, SQLQueries } = require('../../../sapB1/b1appDomain');
const Result = require('../../models/result');

async function getSQLQueries(headers) {
    try {
        sl.headers = headers;
        const response = await sl.get(SQLQueries.sapObjectName);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function getSQLQuery(headers, queryCode, params) {
    try {
        sl.headers = headers;
        const response = await sl.post(`${SQLQueries.sapObjectName}('${queryCode}')/List`, params);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function createSQLQuery(headers, data) { 
    try {
        sl.headers = headers;
        const response = await sl.post(SQLQueries.sapObjectName, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function updateSQLQuery(headers, queryCode, data) {
    try {
        sl.headers = headers;
        const response = await sl.patch(`${SQLQueries.sapObjectName}('${queryCode}')`, data);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}

async function deleteSQLQuery(headers, queryCode) {
    try {
        sl.headers = headers;
        const response = await sl.delete(`${SQLQueries.sapObjectName}('${queryCode}')`);
        return await Result.getResult(response);
    } catch (error) {
        //console.log(error);
        return {
            status: 500,
            data: null,
        };
    }
}


const SqlService = {
    getSQLQueries,
    getSQLQuery,
    createSQLQuery,
    updateSQLQuery,
    deleteSQLQuery,
};

module.exports = SqlService;
