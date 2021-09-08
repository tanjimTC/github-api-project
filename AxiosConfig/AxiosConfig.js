import axios from "axios";
const url = "https://api.github.com/";

const instance = axios.create({
  baseURL: url,
});

export default instance;
