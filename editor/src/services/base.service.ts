import axios from 'axios';

/**
 * The base service class that configures axios.
 */
export default class BaseService<TModel> {
    public baseUrl: string = process.env.VUE_APP_API_BASE_URL;

    /**
     * Default constructor. Configures the default axios headers and base url.
     */
    constructor() {
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    }

    /**
     * Performances a GET request.
     * @param url The API endpoint to call.
     */
    public async get(url: string): Promise<TModel> {
        return axios.get(url, { method: 'get' }).then((response) => {
            return response.data as TModel;
        });
    }

    /**
     * Performs a POST request.
     * @param url The API endpoint to call.
     * @param data The data to pass to the endpoint.
     */
    public async post<TData>(url: string, data?: TData) {
        return axios.post(url, data, { method: 'post' });
    }
}