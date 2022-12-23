import UserRepository from '../models/users.js';

function findAll(req, resp) {
    UserRepository.findAll().then((users) => resp.json(users));
}

export default findAll;