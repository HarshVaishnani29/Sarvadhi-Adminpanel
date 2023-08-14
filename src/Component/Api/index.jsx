import axios from "axios";
import { BASE_URL } from "./BaseUrl";

export const Api = axios.create({
    baseURL : BASE_URL
})