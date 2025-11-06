// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (userId, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: userId,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data);
}

const fetchAllUsersAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (userId) => {
    const URL_BACKEND = `/api/v1/user/${userId}`;
    return axios.delete(URL_BACKEND);
}

export { createUserAPI, updateUserAPI, fetchAllUsersAPI, deleteUserAPI };