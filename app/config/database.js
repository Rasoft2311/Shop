const mongoose = require('mongoose');

// connect to db
const connection = mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(m => m.connection.getClient())
.catch(err => console.log(err));
// try {
//   connection = await mongoose.connect(
//     process.env.MONGO_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//   );
//   connection = connection.getClient();
// } catch(err) {
//   console.log(err);
// }

module.exports = connection;