
export const generateUniqueId = () => {
  const random = Math.random().toString(36).substring(2);
  const currentDate = Date.now().toString(36);
  return random + currentDate;
}