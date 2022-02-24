"use strict";
const a = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed with github pipeline!",
        input: "version serverless cloud using stage",
      },
      null,
      2
    ),
  };
};

module.exports.hello = a;
