const mongoose = require('mongoose');

require('dotenv').config();

// config
const config = {
  db: {
    dbUrl: process.env.DB_URL,
    mongoose: mongoose
  }
}


const createApp = require('./api/app');

createApp(config).then(app => { 
  app.listen(3001, () => {
    console.log("Payment API is running on port 3001....");
  });
}).catch((err) => {
  new Error(err);
})




