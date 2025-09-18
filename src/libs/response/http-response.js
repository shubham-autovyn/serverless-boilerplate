
export const successResponse = (message, data, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify({
    status: 'success',
    message: message,
    data: data || null
  })
});
