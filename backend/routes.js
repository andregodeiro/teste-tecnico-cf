import express from 'express';

const routes = express.Router();

routes.get('/', (res, resp) => {
    return res.json("OK!")
});

export { routes as default };