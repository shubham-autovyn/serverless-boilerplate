
import AWS from 'aws-sdk';
const sqs = new AWS.SQS();

export const sendMessage = async (queueUrl, messageBody) => {
  const params = {
    QueueUrl: queueUrl,
    MessageBody: JSON.stringify(messageBody)
  };
  const res = await sqs.sendMessage(params).promise();
  return res.MessageId;
};
