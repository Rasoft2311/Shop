const mongoose = require('mongoose');
const isProduction = process.env.NODE_ENV === 'production';

async function getDbConnection() {
  try {
    let c = await mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    );
    return c.connection.getClient();
  } catch(err) {
    if(!isProduction) console.log(err);
  }
}

module.exports = getDbConnection;