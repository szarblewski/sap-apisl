async function paths(app) {
    //home da api
    app.use('/', require('./index.routes'));

    /*rotas da api*/
    app.use('/api', require('./info/infoConnection.routes'));

    /*rotas de enums*/
    app.use('/api', require('./info/enums.routes'));

    /*rotas sql*/
    app.use('/api', require('./sqlQueries/sqlQueries.routes'));

    /*rotas tabelas, campos e udo */
    app.use('/api', require('./userTables/userTables.routes'));
    app.use('/api', require('./userTables/userFields.routes'));
    app.use('/api', require('./userTables/userObjects.routes'));

    /*rotas de parceiros de negócio*/
    app.use('/api', require('./businessPartners/businessPartners.routes'));

    /*rotas de itens*/
    app.use('/api', require('./items/items.routes'));
    
    /*rotas de documentos*/
    app.use('/api', require('./documents/invoices.routes'));

}

module.exports = { paths };