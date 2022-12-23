import express from 'express';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3030, () => console.log("Server running in Port 3030!"));