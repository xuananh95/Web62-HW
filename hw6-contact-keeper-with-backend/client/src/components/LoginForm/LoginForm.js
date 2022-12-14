import React from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const { onLoginSubmit } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(errors);
    return (
        <div className="login-form-container">
            <h2 className="text-center display-5">Log in</h2>
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <small className="text-danger">
                            This field is required!
                        </small>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <small className="text-danger">
                            This field is required!
                        </small>
                    )}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
