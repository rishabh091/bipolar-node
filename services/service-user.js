const User = require('../modals/user')
const bycrypt = require('bcrypt')

const save = (user) => {
    user.password = bycrypt.hashSync(user.password, 10)
    return User.create(user)
}

module.exports = {
    save: save
}