import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 3000,
});

// export const contactAxiosInstance = axios.create({
//   baseURL: "https://e-commerse-mail-api.herokuapp.com/",
//   timeout: 10000,
// });
