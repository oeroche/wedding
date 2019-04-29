import Axios from 'axios'
import { apiConfig } from '../config';


export const api = Axios.create({
    baseURL: apiConfig.backendUrl,
});

export const securedApi = Axios.create({
    baseURL: apiConfig.backendUrl,
});