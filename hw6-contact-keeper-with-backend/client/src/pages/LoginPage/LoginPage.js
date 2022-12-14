import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import AuthServices from "../../services/authService";
import "./LoginPage.css";
const LoginPage = () => {
    const [loginError, setLoginError] = useState(null);
    const [loading, setLoading] = useState(false);
    const onLoginSubmit = async (values) => {
        console.log({ values });
        try {
            const loginResponse = await AuthServices.login(values);
            console.log(loginResponse);
        } catch (error) {}
    };
    return (
        <div className="container">
            <div className="login-page-container">
                <LoginForm onLoginSubmit={onLoginSubmit} />
            </div>
        </div>
    );
};

export default LoginPage;
