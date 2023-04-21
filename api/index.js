require('dotenv').config();
const { USER, PASSWORD } = process.env;
const server = require('./src/app.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster-levo.1zvw9yg.mongodb.net/rock-and-food`)
  .then(() => {
    console.log('Connected to mongoDB...');
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  });
