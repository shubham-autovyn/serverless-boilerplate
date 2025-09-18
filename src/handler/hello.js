
import { successResponse } from "../libs/response/http-response.js";

export const main = async (event) => {
  return successResponse("Hello from Serverless Boilerplate Extended 👋 haha",{id:123, name:"chamn"} );
};
