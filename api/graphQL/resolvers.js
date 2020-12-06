const { merge } = require('lodash');

const paymentResolvers = require('./resolvers/payment');

const resolvers = merge({}, paymentResolvers);

module.exports = resolvers;