import UserRepository from '../models/users.js';

async function findAll(req, resp) {
    try {
        const users = await UserRepository.findAll();
    resp.json(users);
    } catch (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }
};

export default {findAll};