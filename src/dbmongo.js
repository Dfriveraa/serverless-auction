const mongoose = require('mongoose');

let conn = null;
const uri = process.env.MONGODB_URI;

const connect = async () => {
  if (conn == null) {
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    }).then(() => mongoose);
    console.log('Connected to MongoDB');
    await conn;
  }

  return conn;
};

module.exports = { connect };
