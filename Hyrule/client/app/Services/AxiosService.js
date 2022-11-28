// @ts-ignore
import Axios from "axios";
import { baseURL } from "../env.js";

// @ts-ignore
// eslint-disable-next-line no-undef
export const server = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true,
});

export const api = Axios.create({
  baseURL: "https://botw-compendium.herokuapp.com/api/v2/entry/",
  timeout: 8000,
});
