import axios from 'axios';
require("dotenv").config()

const url = process.env.REACT_APP_BACKEND_URL;
console.log(url, "url");

axios.defaults.withCredentials = true;


// const authRequest = () => {
//     const token = window.document.cookie.token;

//     return Axios.create({
//         baseURL: window.location.hostname === "localhost" ? "http://localhost:8000" : url,
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// }

export default {
    login: (data) => {
        return axios.post(`${url}/login`, data, { withCredentials: true }).then(data => data);
    },

    register: (user) => {
        return axios.post(`${url}/register`, user).then(data => data);
    },

    logout: () => {
        return axios.get(`/logout`).then(data => data);
    },
    // isAuthorized: (authurl, user) => {
    //     return axios.post(`${url}`, user).then(res => {
    //         return res
    //     })
    // },
    isClientAuthorized: () => {
        return axios.get(`${url}/client/auth`).then(res => res)
    },
    isAdminAuthorized: () => {
        return axios.get(`${url}/admin/auth`).then(res => res)

    },
    isPcbAuthorized: () => {
        return axios.get(`${url}/pcb/auth`).then(res => res)

    },
    client: () => {
        return axios.get(`${url}/client`).then(res => res)
    },
    admin: () => {
        return axios.get(`${url}/admin`).then(res => res)
    },
    pcb: () => {
        return axios.get(`${url}/pcb`).then(res => res)
    }
}