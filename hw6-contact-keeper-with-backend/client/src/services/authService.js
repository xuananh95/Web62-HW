import axiosInstance from "./axiosInstance";
const AuthServices = {
    login: ({ username, password }) => {
        return axiosInstance.post("/auth/login", { username, password });
    },
};

export default AuthServices;
