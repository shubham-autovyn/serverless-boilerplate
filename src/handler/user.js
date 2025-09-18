
import { createUserController } from "../controller/UserController.js";

export const createUser = async (event) => {
  return await createUserController(event);
};
