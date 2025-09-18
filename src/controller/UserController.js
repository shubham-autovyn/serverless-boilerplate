
import { successResponse } from "../libs/response/http-response.js";
import { errorResponse } from "../libs/response/error-response.js";
import { putItem } from "../libs/dynamo.js";
import { v4 as uuidv4 } from "uuid";
import { TABLES } from "../constants/DYNAMO_TABLES.js";

export const createUserController = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const user = { id: uuidv4(), ...body, createdAt: new Date().toISOString() };
    await putItem(TABLES.USER_TABLE, user);
    return successResponse({ message: "User created", user });
  } catch (err) {
    return errorResponse(err);
  }
};
