const Payment = `
  extend type Query {
    paymentList: [Payment]
  }
  
  type Payment {
    customer: String
    amount: Int
  }
`;

module.exports = Payment;