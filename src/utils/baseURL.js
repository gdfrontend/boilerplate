/* eslint-disable */
const baseURL = process.env.NODE_ENV === 'development'
    ? ''
    : process.env.NODE_ENV === 'testing'
    ? '' : ''

module.exports = baseURL
