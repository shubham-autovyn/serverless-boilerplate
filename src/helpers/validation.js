
export const validateUserPayload = (payload) => {
  if (!payload || !payload.name) throw new Error("Invalid payload: name is required");
  return true;
};
