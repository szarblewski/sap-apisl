const { Helpers } = require("../../sapB1/b1appDomain");

class Result {
    static async getResult(response) {
        //console.log(response);
        if (response.error) {
            if(typeof response.message == "string"){
                return {
                    status: 500,
                    data: response.message,
                };
            }else{
                return {
                    status: response.message.error.code,
                    data: response.message.error.message.value,
                };
            }
        }
        else if (Array.isArray(response)){
            return {
                status: 200,
                data: response,
            };
        }    
        else {
            return {
                count: response.data["odata.count"] == undefined ? 0 : response.data["odata.count"],
                nextLink: Helpers.getNextLink(response.data),
                status: response.status,
                data: response.data.value == undefined ? response.data : response.data.value,
            };
        }
    }
}

module.exports = Result;