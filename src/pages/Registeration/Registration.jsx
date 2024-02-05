import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { useContext, useEffect, useState } from 'react';
import FakeShopAPI from '../../services/dummy-shop-api';
import { createAlertMessage } from '../../util/alert-message';
import { AlertMessagesContext } from '../../context/AlertMessagesContext';

const Registeration = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [fullnameValue, setFullnameValue] = useState("");
    const [highlightEmail, setHighlightEmail] = useState(false);
    const [highlightPassword, setHighlightPassword] = useState(false);
    const [highlightFullname, setHighlightFullname] = useState(false);

    const navigate = useNavigate();

    const {alertMessages, setAlertMessages} = useContext(AlertMessagesContext);

    useEffect(() => {
        document.title = "Registration";
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (!valid()) return;
        const api = new FakeShopAPI();
        api.register(emailValue, passwordValue, fullnameValue)
            // .then(r => r.json())
            .then(r => {
                if (r.success) {
                    setAlertMessages([
                        ...alertMessages,
                        createAlertMessage("You are registered.", false)
                    ])
                    clearForm();
                    navigate("/client_account/login");
                } else {
                    setAlertMessages([
                        ...alertMessages,
                        createAlertMessage(r.message, true)
                    ]);
                }
            })
            .catch(e => console.error(e));
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
        return emailValue.length && fullnameValue.length && passwordValue.length;
    };

    const clearForm = () => {
        setEmailValue("");
        setPasswordValue("");
        setFullnameValue("");
    };

    const handleFullnameChange = (e) => {
        setHighlightFullname(false);
        setFullnameValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setHighlightEmail(false);
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setHighlightPassword(false);
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