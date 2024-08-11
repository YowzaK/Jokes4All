const express = require("express");
const moderator = require("./routes/moderatorRoutes");
require("dotenv/config");
var cors = require("cors");
const mongoose = require("mongoose");
const https = require('https');
const path = require('path');
const fs = require('fs');
const {options} = require("./optionsSwagger")
const swaggerUi = require("swagger-ui-express"); 
const swaggerJSDoc = require("swagger-jsdoc");
const spec = swaggerJSDoc(options);
PORT = process.env.PORT;

const app = express();
const sslServer = https.createServer({
  key :fs.readFileSync(path.join(__dirname, 'certificates', 'key.pem')),
  cert:fs.readFileSync(path.join(__dirname, 'certificates', 'cert.pem'))
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/moderator", moderator);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(spec));

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
  console.log('Connected to mongoDB server');
}).catch((err)=>{
  console.error("Error connecting to database", err);
})

const server = https.createServer(sslServer,app);
server.listen(PORT, () => {console.log(`running on port ${PORT}`)})
