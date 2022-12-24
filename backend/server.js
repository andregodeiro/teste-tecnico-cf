const express = require('express');
const routers = require('./routers.js');
const database = require('./src/config/config.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routers);


app.listen(3030, () => console.log("Server running in Port 3030!"));