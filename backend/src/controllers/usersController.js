const UserRepository = require('../services/usersService');

const findAll = async (req, resp) => {
    try {
        const users = await UserRepository.findAll();
        resp.status(200).json({payload: users, message: 'Sucesso'});
    } catch (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }
};

module.exports = {findAll};