
import AWS from 'aws-sdk';
const s3 = new AWS.S3();

export const uploadFile = async (bucket, key, body) => {
  await s3.putObject({ Bucket: bucket, Key: key, Body: body }).promise();
  return { bucket, key, url: `s3://${bucket}/${key}` };
};
