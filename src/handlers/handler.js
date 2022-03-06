const connection = require('../dbmongo');
const User = require('../models/user');

connection.connect();

const createResponse = (statusCode, message) => {
  const response = {
    statusCode,
    body: JSON.stringify(message),
  };
  return response;
};

const createAuction = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const { name, surname } = JSON.parse(event.body);

  const auction = {
    name,
    surname,
    createdAt: new Date().toISOString(),
  };
  const newUser = new User(auction);
  await newUser.save().then();
  const response = createResponse(200, newUser);
  callback(null, response);
};

const getAuctions = async (event, context, callback) => {
  const users = await User.find();
  const response = createResponse(200, users);
  callback(null, response);
};

module.exports = {
  createAuction, getAuctions,
};
