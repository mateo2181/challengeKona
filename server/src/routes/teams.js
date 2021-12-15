const teamsData = require('../data/data.json');
const utils = require('../utils');
let express = require('express');
let router = express.Router();

router.get('/',(req, res) => {
    let teams = [];
    Object.entries(teamsData).forEach(user => {
        const userId = user[0];
        const info = user[1];
        if(info.teams) {
            Object.entries(info.teams).forEach(team => {
                team[1].id = `${userId}&${team[0]}`;
                teams.push(team[1]);
            })
        }
    });
    res.send({data: teams});
});


router.get('/:id', (req, res) => {
    try {    
        const [userId, userTeamId] = req.params.id.split('&');
        const team = teamsData[userId]['teams'][userTeamId];
        if(!team) {
            throw new Error('Team not found');
        }
        console.log(team);
        team.manager = utils.getUserNameById(userId, teamsData);
        team.members = [];
        team.directs.forEach(id => {
            const username = utils.getUserNameById(id, teamsData);
            if(username) {
                team.members.push(username);
            }
        });
        team.secondary_managers = [];
        team.s_manager.forEach(id => {
            const username = utils.getUserNameById(id, teamsData);
            if(username) {
                team.secondary_managers.push(username);
            }
        });
        res.send({data: team});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
});

module.exports = router;