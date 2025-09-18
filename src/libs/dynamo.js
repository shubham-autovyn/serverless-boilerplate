
import AWS from 'aws-sdk';
const dynamo = new AWS.DynamoDB.DocumentClient();

export const putItem = async (table, item) => {
  await dynamo.put({ TableName: table, Item: item }).promise();
  return item;
};

export const getItem = async (table, id) => {
  const res = await dynamo.get({ TableName: table, Key: { id } }).promise();
  return res.Item;
};
