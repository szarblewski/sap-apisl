const B1AppDomain = require('../../../sapB1/b1appDomain');

async function infoConnection() {
    try {
        const response = await B1AppDomain.sl.post('CompanyService_GetCompanyInfo');
        if (response.status === 200) {
            const result = {
                status: response.status,
                companyName: response.data.CompanyName,
                companyDB: process.env.SL_COMPANYDB,
            }
            return result;
        } else {
            const result = {
                status: response.status,
                data: response.data,
            }
            return result;
        }
    } catch (error) {
        console.log(error);
        return null;
    }

}


const authService = {
    infoConnection
}

module.exports = authService;