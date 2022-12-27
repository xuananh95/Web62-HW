import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import authContext from "../../contexts/AuthContext/AuthContext";

const Header = (props) => {
    const { state, fetchUserInformation } = useContext(authContext);
    const { isAuthenticated } = state;
    useEffect(() => {
        if (!state.user) {
            console.log("fetching");
            fetchUserInformation();
        }
    }, [state]);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        ContactKeeper
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {isAuthenticated ? (
                            <p>Hello {state.user?.username}</p>
                        ) : (
                            <div className="authentication-container me-3">
                                <Link to="/login">
                                    <FaUserAlt /> Sign-in
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
