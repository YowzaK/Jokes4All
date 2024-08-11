const express = require("express");
const jokes = require("./routes/jokeRoutes");
var cors = require("cors");
require("dotenv/config");
const {options} = require('./optionsSwagger');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require("swagger-jsdoc");
const spec = swaggerJSDoc(options);
const https = require('https');
const path = require('path');
const fs = require('fs');
PORT = process.env.PORT;

const app = express();

const sslServer = https.createServer({
  key :fs.readFileSync(path.join(__dirname, 'certificates', 'key.pem')),
  cert:fs.readFileSync(path.join(__dirname, 'certificates', 'cert.pem'))
})
app.use(cors());
app.use(express.json()); 
app.use("/jokes", jokes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(spec));

const server = https.createServer(sslServer,app);
server.listen(PORT, () => {console.log(`running on port ${PORT}`)})
