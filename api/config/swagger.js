const routesPath = 'api/routes/*.js';

const swaggerOptions = {
  swaggerDefinition: {
    info : {
      title: 'Payments API',
      description: 'Payments API',
      contact: {
        name: 'developer'
      },
      servers: [process.env.APP_DOMAIN]
    }
  },
  apis: [routesPath]
}

module.exports = swaggerOptions;