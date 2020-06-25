const User = require('../modals/user')
const bycrypt = require('bcrypt')

const save = (user) => {
    user.password = bycrypt.hashSync(user.password, 10)
    return User.create(user)
}

const findByRoom = (room) => {
    let condition = {
        apartmentNo: room
    }

    return User.findOne(condition)
}

const findById = (id) => {
    return User.findById(id)
}

module.exports = {
    save: save,
    findByRoom: findByRoom,
    findById: findById
}