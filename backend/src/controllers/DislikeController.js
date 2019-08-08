const Dev = require('../models/Dev');

module.exports = {
    async store(request, response){
        const {user} = request.headers;
        const {devId} = request.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev){
            return response.status(400).json( {error: 'Dev not exist.'} );
        }

        // Verifica se o usuario logado ja havia dado dislike antes.
        if (loggedDev.dislikes.includes(targetDev._id)){
            return response.json( loggedDev );
        }

        // Inclui o usuario na lista de likes.
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();

        return response.json( loggedDev );
    }
};