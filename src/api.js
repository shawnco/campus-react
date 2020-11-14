import axios from 'axios';
import {api_url} from './config.json';

export default class Api {
    static get(url, data) {
        return axios.get(api_url + url, data);
    }

    static post(url, data) {
        console.log(api_url + url, data)
        return axios.get(api_url + url, data);
    }

    static put(url, data) {
        return axios.put(api_url + url, data);
    }

    static del(url, data) {
        return axios.delete(api_url + url, data);
    }
}