const teamsData = require('../data/data.json');
const utils = require('../utils');
let express = require('express');
let router = express.Router();

router.get('/:id', (req, res) => {
    try {    
        const userId = req.params.id;
        let user = teamsData[userId];
        let teams = [];
        if(user['teams']) {
            teams = Object.values(user['teams']);
        }
        res.send({data: {id: userId, realName: user.realName, teams}});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
});

module.exports = router;