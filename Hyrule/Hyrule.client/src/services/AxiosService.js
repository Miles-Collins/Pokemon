import Axios from "axios";
import { baseURL } from "../env";
export const api = Axios.create({
  baseURL,
  timeout: 8000,
});
export const api = Axios.create({
  baseURL: "https://botw-compendium.herokuapp.com/api/v2/entry/",
  timeout: 8000,
});
