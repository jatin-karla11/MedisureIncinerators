import axios from 'axios';
require("dotenv").config()

const url = process.env.REACT_APP_BACKEND_URL;
console.log(url, "url");

axios.defaults.withCredentials = true;


const authRequest = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: window.location.hostname === "localhost" ? "http://localhost:8000" : url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default {
    login: (data) => {
        return authRequest().post(`/login`, data, { withCredentials: true }).then(data => data);
    },

    register: (user) => {
        return authRequest().post(`/register`, user).then(data => data);
    },

    logout: (user) => {
        console.log(user , "role")
        return authRequest().get(`/${user}/logout`).then(data => data);
    },
    // isAuthorized: (authurl, user) => {
    //     return authRequest().post(`${url}`, user).then(res => {
    //         return res
    //     })
    // },
    isClientAuthorized: () => {
        return authRequest().get(`/client/auth`).then(res => res)
    },
    isAdminAuthorized: () => {
        return authRequest().get(`/admin/auth`).then(res => res)

    },
    isPcbAuthorized: () => {
        return authRequest().get(`/pcb/auth`).then(res => res)

    },
    client: () => {
        return authRequest().get(`/client`).then(res => res)
    },
    admin: () => {
        return authRequest().get(`/admin`).then(res => res)
    },
    pcb: () => {
        return authRequest().get(`/pcb`).then(res => res)
    },
    
    home: () => {
        return authRequest().get(`/home`).then(res => res)
    },
    getClients : () =>{
        return authRequest().get(`/auth/admin/get-clients`).then(res => res)
    },
    addCertificate : (data)=>{
        return authRequest().post(`/auth/admin/add-certificate` , data).then(res => res)
    },
    getSpecificClient : (data)=>{
        return authRequest().post(`/auth/admin/get-client` , data).then(res => res)
    },
    editProfile : (data)=>{
        return authRequest().post(`/auth/editprofile` , data).then(res => res)
    },
    sendEmail:(data)=>{
        return authRequest().post(`/form`,data).then(res=>res)
    },
    deleteCertificate : (data)=>{
        return authRequest().post(`/admin/delete-certificate`,data).then(res=>res)
    },
    deleteClient : (id)=>{
        return authRequest().delete(`/admin/delete-client?id=${id}`).then(res=>res)
    }
}