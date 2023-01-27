async function paths(app) {
    //home da api
    app.use('/', require('./index.routes'));

    /*rotas da api*/
    app.use('/api', require('./info/infoConnection.routes'));

    /*rotas de enums*/
    app.use('/api', require('./info/enums.routes'));

    /*rotas tabelas, campos e udo */
    app.use('/api', require('./userTables/userTables.routes'));
    app.use('/api', require('./userTables/userFields.routes'));
    app.use('/api', require('./userTables/userObjects.routes'));

    

}

module.exports = { paths };