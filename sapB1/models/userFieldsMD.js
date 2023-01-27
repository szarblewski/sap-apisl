const ValidValuesMD = require("./complex/validValuesMD");

class UserFieldsMD {
    constructor() {
        this.sapObjectName = 'UserFieldsMD';
        this.Name = new String();
        this.Type = new String();
        this.Size = new Number();
        this.Description = new String();
        this.SubType = new String();
        this.LinkedTable = new String();
        this.DefaultValue = new String();
        this.TableName = new String();
        this.FieldID = new Number();
        this.EditSize = new Number();
        this.Mandatory = new String();
        this.LinkedUDO = new String();
        this.LinkedSystemObject = new String();
        this.ValidValuesMD = [ValidValuesMD];
    }
    sapObjectName;
    Name;
    Type;
    Size;
    Description;
    SubType;
    LinkedTable;
    DefaultValue;
    TableName;
    FieldID;
    EditSize;
    Mandatory;
    LinkedUDO;
    LinkedSystemObject;
    ValidValuesMD;
}

module.exports = UserFieldsMD;