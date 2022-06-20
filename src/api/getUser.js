import { request } from "axios";

export function requestGetUser(payload) {
  const { userInput, pageNum } = payload;

  const num = pageNum ? pageNum : 1;
  const user = userInput ? userInput : "a";

  console.log(user, num);

  return request({
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${user}&page=${num}&include_adult=false`,
  });
}
