const Payment = require('../models/payment');

// Create and Save a new Payment
exports.create = (req, res) => {
  // Validate request
  if(!req.body) {
    return res.status(400).send({
      message: "Payment body can not be empty"
    });
  }

  // Create a Payment
  const payment = new Payment({
    customer: req.body.customer,
    amount: req.body.amount
  });

  // Save Payment in the database
  payment.save()
    .then(payment => {
      res.status(201).json({
        createdPayment: payment
      });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Payment."
      });
  });
};

// Retrieve and return all paymenta from the database.
exports.findAll = (req, res) => {
  Payment.find()
    .then(payments => {
      res.send(payments);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving payments."
    });
  });
};

// Find a single payment with an id
exports.findOne = (req, res) => {
  Payment.findById(req.params.id)
    .then(payment => {
      if (!payment) {
        return res.status(404).send({
          message: "Payment not found with id " + req.params.id
        });
      }
      res.send(payment);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Payment not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving payment with id " + req.params.id
      });
  });
};

// Update a payment identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body) {
    return res.status(400).send({
      message: "Payment body can not be empty"
    });
  }

  // Find note and update it with the request body
  Payment.findByIdAndUpdate(req.params.id, {
    customer: req.body.customer,
    amount: req.body.amount
  }, {new: true})
    .then(payment => {
      if(!payment) {
        return res.status(404).send({
          message: "Payment not found with id " + req.params.id
        });
      }
      res.send(payment);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Payment not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Error updating payment with id " + req.params.id
    });
  });
};

// Delete a payment with the specified id in the request
exports.delete = (req, res) => {
  Payment.findByIdAndRemove(req.params.id)
    .then(payment => {
      if(!payment) {
        return res.status(404).send({
          message: "Payment not found with id " + req.params.id
        });
      }
      res.send({message: "Payment deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Payment not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Could not delete payment with id " + req.params.id
    });
  });
};
