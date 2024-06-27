import axios from "axios";

const URL = import.meta.env.VITE_API || "http://localhost:4000";
const API =  `${URL}/api`;

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default instance;