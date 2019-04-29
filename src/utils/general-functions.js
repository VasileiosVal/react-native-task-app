export const validateResult = result => {
  const errors = {};
  if (!result.error) return null;
  for (let i of result.error.details) errors[i.path] = i.message;
  return errors;
};
