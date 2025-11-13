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

const updateUserAvatarAPI = (userId, avatar, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: userId,
        avatar: avatar,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data);
}

const fetchAllUsersAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (userId) => {
    const URL_BACKEND = `/api/v1/user/${userId}`;
    return axios.delete(URL_BACKEND);
}

const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return axios.post(URL_BACKEND, data);
}

const upLoadFileAPI = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            "upload-type": folder
        },

    };

    let formData = new FormData();
    formData.append("fileImg", file);
    return axios.post(URL_BACKEND, formData, config);
}

const loginAPI = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: email,
        password: password,
        // delay: 5000
    };
    return axios.post(URL_BACKEND, data);
}

export {
    createUserAPI, updateUserAPI, fetchAllUsersAPI,
    deleteUserAPI, upLoadFileAPI, updateUserAvatarAPI,
    registerUserAPI, loginAPI
};