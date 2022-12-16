import axiosInstance from "./axiosInstance";
const AuthServices = {
    login: ({ username, password }) => {
        return axiosInstance.post("/auth/login", { username, password });
    },
    fetchUserInformation: () => {
        return axiosInstance.get("/auth");
    },
};

export default AuthServices;
