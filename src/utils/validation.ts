export const validateName = (value: string) => {
  if (!value) return "This field is required.";
  if (value.length < 2 || value.length > 12)
    return "Must be between 2 and 12 characters.";
  if (!/^[a-zA-Z]+$/.test(value))
    return "Only alphabetic characters are allowed.";
  return true;
};
