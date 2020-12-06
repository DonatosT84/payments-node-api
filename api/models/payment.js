const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema(
  {
    customer: String,
    amount: Number
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('Payment', PaymentSchema);
