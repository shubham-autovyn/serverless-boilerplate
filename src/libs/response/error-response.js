export const errorResponse = (message, statusCode = 500) => ({
  statusCode,
  body: JSON.stringify({
    status: 'error',
    message: message || 'Internal Server Error',
    error: error || null
  })
});