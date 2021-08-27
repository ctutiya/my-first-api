const basicAuth = require('express-basic-auth')

module.exports = basicAuth({
    unauthorizedResponse: () => {
        return '403 - access denied!!'
    },
    authorizer: (user, password) => {
        const admin = {
            _user: process.env.USER_ID || 'admin',
            _password: process.env.USER_PASSWORD || 'password'
        }

        const userMatches = basicAuth.safeCompare(user, admin._user)
        const passwordMatches = basicAuth.safeCompare(password, admin._password)

        if (userMatches && passwordMatches) {
            return userMatches & passwordMatches
        }
    }
})