import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    test(endpoint) {
        const url = baseUrl + endpoint;
        return {
            fetchAll: () => axios.get(url),
            fetchByName: name => { return axios.get(url + name) }
        }
    }
}