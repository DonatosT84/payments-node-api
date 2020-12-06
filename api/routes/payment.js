module.exports = (app) => {
  const payments = require('../controllers/payment.js');

  /**
   * Create a new Payment
   *
   * @swagger
   * /payments:
   *  post:
   *    description: Use to create a payment
   *    tags:
   *      - payments
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: body
   *        name: payment
   *        description: The payment to create
   *        schema:
   *          type: object
   *          required:
   *            - customer
   *            - amount
   *          properties:
   *            customer:
   *              type: string
   *            amount:
   *              type: integer
   *    responses:
   *      '400':
   *        description: Invalid or missing body data
   *      '201':
   *        description: Customer successfully created
   *      '500':
   *        description: Server error
   */
  app.post('/payments', payments.create);

  /**
   * Retrieve all Payments
   *
   * @swagger
   * /payments:
   *  get:
   *    description: Use to retrieve all payments
   *    tags:
   *      - payments
   *    responses:
   *      '200':
   *        description: A successful response with a list of all payments
   */
  app.get('/payments', payments.findAll);

  /**
   * Retrieve a single Payment with id
   *
   * @swagger
   * /payments/{id}:
   *  get:
   *    description: Use to retrieve a payment by id
   *    tags:
   *      - payments
   *    parameters:
   *      - in: path
   *        name: id
   *        type: integer
   *        required: true
   *        description: ID of the payment to get.
   *    responses:
   *      '200':
   *        description: A successful response with the updated payment
   *      '404':
   *        description: Payment ID not found
   *      '500':
   *        description: Server error
   */
  app.get('/payments/:id', payments.findOne);

  /**
   * Update a Payment with id
   *
   * @swagger
   * /payments/{id}:
   *  put:
   *    description: Use to update a payment by id
   *    tags:
   *      - payments
   *    parameters:
   *      - in: path
   *        name: id
   *        type: integer
   *        required: true
   *        description: ID of the payment to update.
   *      - in: body
   *        name: payment
   *        description: The payment to update
   *        schema:
   *          type: object
   *          properties:
   *            customer:
   *              type: string
   *            amount:
   *              type: integer
   *    responses:
   *      '200':
   *        description: A successful response
   *      '404':
   *        description: Payment ID not found
   *      '500':
   *        description: Server error
   */
  app.put('/payments/:id', payments.update);

  /**
   * Delete a Payment with id
   *
   * @swagger
   * /payments/{id}:
   *  delete:
   *    description: Use to delete a payment
   *    tags:
   *      - payments
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: path
   *        name: id
   *        type: integer
   *        required: true
   *        description: ID of the payment to delete.
   *    responses:
   *      '404':
   *        description: Payment ID not found
   *      '200':
   *        description: Payment successfully deleted
   *      '500':
   *        description: Server error
   */
  app.delete('/payments/:id', payments.delete);
}