import React, { useContext, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import authContext from "../../contexts/AuthContext/AuthContext";
import AuthServices from "../../services/authService";
import "./LoginPage.css";
import { LOGIN } from "../../contexts/types";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [loginError, setLoginError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch, fetchUserInformation } = useContext(authContext);
    const navigate = useNavigate();
    const onLoginSubmit = async (values) => {
        try {
            setLoading(true);
            const loginResponse = await AuthServices.login(values);
            const action = {
                type: LOGIN,
                payload: loginResponse.data,
            };
            dispatch(action);
            setLoading(false);
            setLoginError(null);
            navigate("/");
        } catch (error) {
            setLoginError(error.response.data.msg);
            setLoading(false);
        }
    };
    return (
        <div className="container">
            <div className="login-page-container">
                <LoginForm
                    onLoginSubmit={onLoginSubmit}
                    loading={loading}
                    loginError={loginError}
                />
            </div>
        </div>
    );
};

export default LoginPage;
