const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
    async index(request, response){
        const { user } = request.headers;

        const loggedDev = await Dev.findById(user);

        // Busca todos os usuarios que o Desenvolvedor logado não "avaliou" ou seja
        // Não deu Like nem Dislike e não é ele mesmo...
        const users = await Dev.find({
            $and:[
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes}},
                { _id: { $nin: loggedDev.dislikes}},
            ],
        })

        return response.json(users);
    },

    async store(request, response){
        const { username } = request.body;

        // Verifica se o usuario ja existe
        const userExists = await Dev.findOne({ user: username });
        if (userExists){
            console.log(`${username} already exist.`);
            return response.json(userExists);
        }

        // Se o usuario não existe então deve ser criado.
        const responseGitHub = await axios.get(`https://api.github.com/users/${username}`);
        const { name, bio, avatar_url: avatar} = responseGitHub.data;

        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar
         })

        console.log(`${username} was created.`);
        return response.json(dev);
    }
};