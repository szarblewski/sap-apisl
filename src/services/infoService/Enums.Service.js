const Result = require('../../models/result');
const BoUTBTableType = require('../../../sapB1/models/enums/BoUTBTableType');
const BoFldSubTypes = require('../../../sapB1/models/enums/BoFldSubTypes');
const BoFieldTypes = require('../../../sapB1/models/enums/BoFieldTypes');


async function getBoUTBTableType() {
    try {
        const response = await Object.values(BoUTBTableType);
        return await Result.getResult(response);
    } catch (error) {
        return {
            status: 500,
            data: null,
        };
    }
}

async function getBoFldSubTypes() {
    try {
        const response = await Object.values(BoFldSubTypes);
        return await Result.getResult(response);
    } catch (error) {
        return {
            status: 500,
            data: null,
        };
    }
}

async function getBoFieldTypes() {
    try {
        const response = await Object.values(BoFieldTypes);
        return await Result.getResult(response);
    } catch (error) {
        return {
            status: 500,
            data: null,
        };
    }
}




const EnumsServices = {
    getBoUTBTableType,
    getBoFldSubTypes,
    getBoFieldTypes,
};

module.exports = EnumsServices;
