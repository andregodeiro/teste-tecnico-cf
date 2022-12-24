import UserRepository from '../models/users.js';

const findAll = async (req, resp) => {
    await UserRepository.findAll().then((users) => resp.json(users));
}

export default {findAll};