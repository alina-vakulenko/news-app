export const getPageCount = (totalResults, limit) => {
  return Math.ceil(totalResults / limit);
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
