import { Link } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';

const Registeration = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [fullnameValue, setFullnameValue] = useState("");
    const [highlightEmail, setHighlightEmail] = useState(false);
    const [highlightPassword, setHighlightPassword] = useState(false);
    const [highlightFullname, setHighlightFullname] = useState(false);

    useEffect(() => {
        document.title = "Registration";
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (!valid()) return;
        clearForm();
    };

    const valid = () => {
        if (!emailValue.length) {
            setHighlightEmail(true);
        }
        if (!passwordValue.length) {
            setHighlightPassword(true);
        }
        if (!passwordValue.length) {
            setHighlightFullname(true);
        }
        return emailValue.length && passwordValue.length && passwordValue.length;
    };

    const clearForm = () => {
        setEmailValue("");
        setPasswordValue("");
        setFullnameValue("");
    };

    const handleFullnameChange = (e) => {
        setFullnameValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    return (
        <div className="register">
            <div className="register__content container-lg">
                <h2>Registration</h2>
                <form className="register__form" onSubmit={onSubmit}>
                    <div className="register__form-row">
                        <label htmlFor="name-input">Full name: <span style={{ "color": "red" }}>*</span></label><br />
                        <input id="name-input"
                            className={highlightFullname ? "error-input" : ""}
                            value={fullnameValue}
                            onChange={handleFullnameChange}
                            type="text" name="fullname" />
                    </div>

                    <div className="register__form-row">
                        <label htmlFor="email-input">Email: <span style={{ "color": "red" }}>*</span></label><br />
                        <input id="email-input"
                            className={highlightEmail ? "error-input" : ""}
                            value={emailValue}
                            onChange={handleEmailChange}
                            type="text" name="email" />
                    </div>

                    <div className="register__form-row">
                        <label htmlFor="password-input">Password: <span style={{ "color": "red" }}>*</span></label><br />
                        <input id="password-input"
                            className={highlightPassword ? "error-input" : ""}
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            type="password" name="password" />
                    </div>

                    <div className="register__form-bottom">
                        <button className="button">Register</button>
                        <Link className="form__link" to="/client_account/login">Go to login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registeration;