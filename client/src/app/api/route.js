import axios from "axios";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const postOptions = (body) => ({ method: "POST", headers: myHeaders, credentials: 'include', redirect: 'follow', body: JSON.stringify(body) });

/* Session Routes */
export function login(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/session`, data, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function logout() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_DOMAIN}/session`, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

/* User */
export function register(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/user`, data, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function passwordResetToken(params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/user/passwordReset`,
                {
                    params: params,
                    withCredentials: true
                });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function passwordReset(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.patch(`${process.env.REACT_APP_API_DOMAIN}/user/passwordReset`, data,
                {
                    withCredentials: true
                });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function getUsers() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/user`, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

/* Chats */

export function getChats() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/chat`, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function getChatById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/chat/${id}`, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
export function sendMessage(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/chat/message`, data, { withCredentials: true });
            const result = await response.data;
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}