
export const parseJsonSafe = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};
