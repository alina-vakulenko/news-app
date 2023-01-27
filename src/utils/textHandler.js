export const cutText = (text, numberOfWords) => {
  const words = text.split(" ");
  return words.slice(0, numberOfWords).join(" ");
};
