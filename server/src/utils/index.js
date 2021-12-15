
function getUserNameById(id, data) {
    const username = data[id] ? data[id].realName : null;
    return username ? {username} : null;
}

module.exports = {
    getUserNameById
}