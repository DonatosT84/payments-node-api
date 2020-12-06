const Payment = require('../../models/payment');


const resolvers = {
  Query: {
    // TODO: Add a filter to the graphQL query
    paymentList: (root, input, context, info) => {
      // resolver logic
      // call to a different microservice
      return Payment.find()
    },
  }
}

module.exports = resolvers;