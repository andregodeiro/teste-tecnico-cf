const UserRepository = require('../models/users.js');

const findAll = async (req, resp) => {
    await UserRepository.findAll().then((users) => resp.json(users));
}

modeule.exports = {findAll};