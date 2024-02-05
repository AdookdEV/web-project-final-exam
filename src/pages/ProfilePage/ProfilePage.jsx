import { useContext, useEffect, useState } from "react";
import FakeShopAPI from "../../services/dummy-shop-api";

import './style.css';
import { AlertMessagesContext } from "../../context/AlertMessagesContext";
import { createAlertMessage } from "../../util/alert-message";
import { Link, useNavigate } from "react-router-dom";

const api = new FakeShopAPI();

const ProfilePage = () => {
    const [userData, setUserData] = useState({});
    const [changePassword, setChangePassword] = useState(false);
    const [passwordValues, setPasswordValues] = useState({ "oldpassword": "", "newpassword": "", "confirm": "" });
    const [errorFullname, setErrorFullname] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorOldpassord, setErrorOldpassord] = useState(false);
    const [errorNewpassword, setNewpassword] = useState(false);
    const [errorConfirm, setErrorConfirm] = useState(false);

    const {alertMessages, setAlertMessages} = useContext(AlertMessagesContext);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate("/client_account/login");
        }
        fetchUserData(token);
    }, []);

    const fetchUserData = async (token) => {
        const api = new FakeShopAPI();
        const res = await api.getUser(token);
        if (res.success) {
            setUserData(res.data);
        } else {
            navigate("/client_account/login");
        }
    }

    const valid = () => {
        if (userData.fullname.length === 0) {
            setErrorFullname(true);
        }
        if (userData.email.length === 0) {
            setErrorEmail(true);
        }
        if (!changePassword) return userData.fullname.length
            && userData.email.length;
        if (passwordValues.oldpassword.length === 0) {
            setErrorOldpassord(true);
        }
        if (passwordValues.newpassword.length === 0) {
            setNewpassword(true);
        }
        if (passwordValues.confirm.length === 0) {
            setErrorConfirm(true);
        }
        if (passwordValues.confirm !== passwordValues.newpassword) {
            setErrorConfirm(true);
            setNewpassword(true);
        }
        return userData.fullname.length
            && userData.email.length
            && passwordValues.oldpassword.length
            && passwordValues.newpassword.length
            && passwordValues.confirm.length
            && passwordValues.confirm === passwordValues.newpassword;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!valid()) return;
        const token = localStorage.getItem('token');
        api.updateUser(token, {...userData, oldpassword: passwordValues.oldpassword})
            // .then(r => r.json())
            .then(r => {
                setAlertMessages([
                    ...alertMessages,
                    createAlertMessage(r.message, r.success === 0)
                ]);
            })
    };

    const logout = () => {
        localStorage.removeItem('token');
    }

    if (!userData.fullname || !userData.email) return null;
    return (
        <div className="profile-page container-lg">
            <div className="profile__content">
                <h2>Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="profile__form-row">
                        <label>Fullname: </label>
                        <input type="text"
                            className={errorFullname ? "profile__input-error" : ""}
                            value={userData.fullname} 
                            onChange={(e) => { setUserData({ ...userData, fullname: e.target.value }); setErrorFullname(false) }} />
                    </div>
                    <div className="profile__form-row">
                        <label>Email: </label>
                        <input type="text"
                            className={errorEmail ? "profile__input-error" : ""}
                            value={userData.email}
                            onChange={(e) => { setUserData({ ...userData, email: e.target.value }); setErrorEmail(false) }} />
                    </div>
                    <div className="profile__password-control">
                        <input className="profile__password-checkbox"
                            type="checkbox"
                            defaultChecked={changePassword}
                            onChange={() => setChangePassword(!changePassword)} />
                        Change password
                    </div>
                    {
                        changePassword ?
                            <>
                                <div className="profile__form-row">
                                    <label>Old password: </label>
                                    <input type="password"
                                        className={errorOldpassord ? "profile__input-error" : ""}
                                        value={passwordValues.oldpassword}
                                        onChange={(e) => { setPasswordValues({ ...passwordValues, oldpassword: e.target.value }); setErrorOldpassord(false) }} />
                                </div>
                                <div className="profile__form-row">
                                    <label>New password: </label>
                                    <input type="password"
                                        className={errorNewpassword ? "profile__input-error" : ""}
                                        value={passwordValues.newpassword}
                                        onChange={(e) => { setPasswordValues({ ...passwordValues, newpassword: e.target.value }); setNewpassword(false) }} />
                                </div>
                                <div className="profile__form-row">
                                    <label>Confirm password: </label>
                                    <input type="password"
                                        className={errorConfirm ? "profile__input-error" : ""}
                                        value={passwordValues.confirm}
                                        onChange={(e) => { setPasswordValues({ ...passwordValues, confirm: e.target.value }); setErrorConfirm(false) }} />
                                </div>
                            </>
                            : null
                    }
                    <button className="button profile__form-btn">Save</button>
                    <Link className="profile__logout" to="/client_account/login" onClick={logout}>Logout</Link>
                </form>
            </div>
        </div>
    );
}


export default ProfilePage;