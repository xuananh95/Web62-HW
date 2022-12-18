import { LOGIN, USER_UPDATED } from "../types";

const authReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            console.log("payload", payload);
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                accessToken: payload.token,
                isAuthenticated: payload.isAuthenticated,
            };
        }
        case USER_UPDATED: {
            return {
                ...state,
                isAuthenticated: true,
                token: localStorage.getItem("token"),
                user: payload,
            };
        }
        default:
            return { state };
    }
};

export default authReducer;
