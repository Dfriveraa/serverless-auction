const auctions = [{
  name: 'John',
  surname: 'Doe',
}];

const createResponse = (statusCode, message) => {
  const response = {
    statusCode,
    body: JSON.stringify(message),
  };
  return response;
};

const createAuction = async (event, context, callback) => {
  const { name, surname } = JSON.parse(event.body);

  const auction = {
    name,
    surname,
    createdAt: new Date().toISOString(),
  };

  auctions.push(auction);
  const response = createResponse(200, auctions);
  callback(null, response);
};

const getAuctions = async (event, context, callback) => {
  const response = createResponse(200, auctions);
  callback(null, response);
};

module.exports = {
  createAuction, getAuctions,
};
