import Axios from "axios";
import { baseURL } from "../env";
export const api = Axios.create({
  baseURL,
  timeout: 8000,
});
export const hyrule = Axios.create({
  baseURL: "https://botw-compendium.herokuapp.com/api/v2",
  timeout: 8000,
});
