

class Helpers {
    static getNextLink(data) {
        //console.log(data);
        if (data["odata.nextLink"] == undefined) {
            return '';
        } else {
            let value = data["odata.nextLink"].split("$skip=")[1].indexOf("&") > -1 ? data["odata.nextLink"].split("$skip=")[1].split("&")[0] : data["odata.nextLink"].split("$skip=")[1];
            return '$Skip=' + value;
        }
    }
}

module.exports = Helpers;