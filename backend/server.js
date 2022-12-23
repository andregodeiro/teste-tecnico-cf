import express from 'express';
import routers from './routers.js';
import database from './src/config/db-config.js';

const app = express();

app.use(express.json());
app.use(routers);

database.sync(() => console.log(`DataBase connected: ${process.env.DB_NAME}`));

app.listen(3030, () => console.log("Server running in Port 3030!"));