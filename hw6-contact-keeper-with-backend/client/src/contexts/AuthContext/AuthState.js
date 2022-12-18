import { useEffect, useReducer } from "react";
import AuthServices from "../../services/authService";
import axiosInstance from "../../services/axiosInstance";
import { USER_UPDATED } from "../types";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

const initialState = {
    accessToken: localStorage.getItem("token") || null,
    user: null,
    isAuthenticated: !!localStorage.getItem("token") && true,
};

const AuthState = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const fetchUserInformation = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
                const res = await AuthServices.fetchUserInformation();
                console.log("res", res);
                dispatch({
                    type: USER_UPDATED,
                    payload: res.data,
                });
            } catch (error) {
                console.log("error", error);
                delete axiosInstance.defaults.headers.Authorization;
            }
        } else {
            console.log("else");
            delete axiosInstance.defaults.headers.Authorization;
        }
    };
    useEffect(() => {
        console.log("changing state");
        if (!state.user) {
            fetchUserInformation();
        }
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, dispatch, fetchUserInformation }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
