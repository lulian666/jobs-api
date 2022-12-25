const CustomAPIError = require('./custom-error')
const UnauthenticatedError = require('./unauthenticated')
const BadRequest = require('./bad-request')
const NotFound = require('./not-found')

module.exports = {
    CustomAPIError,
    UnauthenticatedError,
    BadRequest,
    NotFound,
}
