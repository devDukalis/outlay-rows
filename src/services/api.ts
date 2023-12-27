import axios from "axios";

const URL = "http://185.244.172.108:8081/";

export default axios.create({
  baseURL: URL,
});
