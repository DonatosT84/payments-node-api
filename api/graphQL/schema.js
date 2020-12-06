const { gql } = require('apollo-server-express');

const Payment = require('./models/payment');

const Query = gql`
  type Query {
    _empty: String
  }`;

const typeDefs = [ Query, Payment ];

module.exports = typeDefs;