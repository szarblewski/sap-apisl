const ChildTable = require("./complex/childTable");
const EnhancedFormColumn = require("./complex/enhancedFormColumn");
const FindColumns = require("./complex/findColumns");
const FormColumn = require("./complex/formColumn");


class UserObjectsMD {
    constructor() {
        this.sapObjectName = 'UserObjectsMD';
        this.TableName = new String();
        this.Code = new String();
        this.LogTableName = new String();
        this.CanCreateDefaultForm = new String();
        this.ObjectType = new String();
        this.ExtensionName = new String();
        this.CanCancel = new String();
        this.CanDelete = new String();
        this.CanLog = new String();
        this.ManageSeries = new String();
        this.CanFind = new String();
        this.CanYearTransfer = new String();
        this.Name = new String();
        this.CanClose = new String();
        this.OverwriteDllfile = new String();
        this.UseUniqueFormType = new String();
        this.CanArchive = new String();
        this.MenuItem = new String();
        this.MenuCaption = new String();
        this.FatherMenuID = new Number();
        this.Position = new Number();
        this.MenuUID = new String();
        this.EnableEnhancedForm = new String();
        this.RebuildEnhancedForm = new String();
        this.FormSRF = new String();
        this.UserObjectMD_ChildTables = [ChildTable];
        this.UserObjectMD_FindColumns = [FindColumns];
        this.UserObjectMD_FormColumns = [FormColumn];
        this.UserObjectMD_EnhancedFormColumns = [EnhancedFormColumn];
    }
    sapObjectName;
    TableName;
    Code;
    LogTableName;
    CanCreateDefaultForm;
    ObjectType;
    ExtensionName;
    CanCancel;
    CanDelete;
    CanLog;
    ManageSeries;
    CanFind;
    CanYearTransfer;
    Name;
    CanClose;
    OverwriteDllfile;
    UseUniqueFormType;
    CanArchive;
    MenuItem;
    MenuCaption;
    FatherMenuID;
    Position;
    MenuUID;
    EnableEnhancedForm;
    RebuildEnhancedForm;
    FormSRF;
    UserObjectMD_ChildTables;
    UserObjectMD_FindColumns;
    UserObjectMD_FormColumns;
    UserObjectMD_EnhancedFormColumns;



}

module.exports = UserObjectsMD;