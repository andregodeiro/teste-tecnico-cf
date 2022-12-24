const express = require('express');
const routers = require('./routers.js');
const database = require('./src/config/config.js');
require('dotenv').config();

const DB_PORT = process.env.DB_PORT;

const app = express();

app.use(express.json());
app.use(routers);


app.listen(DB_PORT, () => console.log("Server running in Port 3030!"));