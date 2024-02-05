import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import './style.css';
import FakeShopAPI from "../../services/dummy-shop-api";
import { AlertMessagesContext } from "../../context/AlertMessagesContext";
import { createAlertMessage } from "../../util/alert-message";


const Login = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [highlightEmail, setHighlightEmail] = useState(false);
    const [highlightPassword, setHighlightPassword] = useState(false);


    const { alertMessages, setAlertMessages } = useContext(AlertMessagesContext);
    const nagivate = useNavigate();

    useEffect(() => {
        document.title = "Login";
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        const api = new FakeShopAPI();
        api.login(emailValue, passwordValue)
            // .then(r => r.json())
            .then((r) => {
                if (r.success) {
                    localStorage.setItem("token", r.token);
                    clearFields();
                    nagivate("/");
                }
                else {
                    setAlertMessages([
                        ...alertMessages,
                        createAlertMessage(r.message, true)
                    ]);
                }
            })
    };

    const validate = () => {
        if (!emailValue.length) {
            setHighlightEmail(true);
        }
        if (!passwordValue.length) {
            setHighlightPassword(true);
        }
        return emailValue.length && passwordValue.length;
    };

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
        setHighlightEmail(false);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
        setHighlightPassword(false);
    };

    const clearFields = () => {
        setEmailValue("");
        setPasswordValue("");
    };

    return (
        <div className="login">
            <div className="login__content container-lg">
                <h2>Login to your account</h2>
                <form className="login__form" onSubmit={onSubmit}>
                    <div className="login__form-row">
                        <label htmlFor="email-input">Email: <span style={{ "color": "red" }}>*</span></label><br />
                        <input id="email-input"
                            className={highlightEmail ? "error-input" : ""}
                            value={emailValue}
                            onChange={handleEmailChange}
                            type="text" name="email" />
                    </div>

                    <div className="login__form-row">
                        <label htmlFor="password-input">Password: <span style={{ "color": "red" }}>*</span></label><br />
                        <input id="password-input"
                            className={highlightPassword ? "error-input" : ""}
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            type="password" name="password" />
                    </div>

                    <div className="login__form-bottom">
                        <button className="button">Login</button>
                        <Link className="form__link" to="/client_account/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;