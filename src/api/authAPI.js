import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "",
  headers: {
    "API-KEY": "",
  },
});

export const resultCodes = {
  success: 0,
  error: 1,
};

export const authAPI = {
  login(telNumber, password) {
    return instance.post("auth/login", { telNumber, password });
  },
};
