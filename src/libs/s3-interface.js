
import { uploadFile } from "./s3.js";

export const uploadJsonObject = async (bucket, key, obj) => {
  const body = JSON.stringify(obj);
  return uploadFile(bucket, key, body);
};
