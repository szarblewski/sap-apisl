const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

var corsOptions = {
    origin: "*",
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

routes.paths(app);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
    }
);



