import axios from "axios";

export const getHeadlinesForCategory = ({
  country,
  category,
  pageSize,
  page,
}) => {
  axios({
    method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
    params: {
      country: country,
      category: category,
      pageSize: pageSize,
      page: page,
    },
  });
};
