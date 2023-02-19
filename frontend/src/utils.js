export const getError = (error) => {
  return error.response && error.response.date.message
    ? error.response.date.message
    : error.message;
};
