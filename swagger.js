require('dotenv').config()
const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "SAP API",
        description: "Documentação gerada automaticamente <b>swagger-autogen</b> module."
    },
    host: `${process.env.LOCALHOST}:13000`,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ]
    
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/routes/routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/routes/routes.js')           
})