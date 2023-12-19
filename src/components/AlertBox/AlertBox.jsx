import { useContext, useState } from 'react';
import './style.css';
import { AlertMessagesContext } from '../../context/AlertMessagesContext';

const AlertItem = ({ message, clearMessage }) => {
    const [show, setShow] = useState(true);
    let timer = setTimeout(function request() {
        if (Date.now() - message.id > 3000) {
            setShow(false);
            clearTimeout(timer);
            return;
        }
        timer = setTimeout(request, 500);
    }, 500);
    if (!show) return null;
    const className = `alert-box__item ${message.isError ? 'alert-box__item--error' : ''}`;
    return (
        <div className={className}>
            {message.content}
        </div>
    );
};


const AlertBox = () => {
    const { alertMessages, setAlertMessages } = useContext(AlertMessagesContext);

    const clearMessage = (id) => {
        const m = alertMessages.slice();
        setAlertMessages(m.filter(item => item.id !== id));
    };
    
    if (alertMessages.length === 0) return null;
    return (
        <div className="alert-box">
            {
                alertMessages.slice(-5).map((m, i) => (
                    <AlertItem key={m.id}
                        message={m}
                        clearMessage={clearMessage}
                    />
                ))
            }
        </div>
    )
}

export default AlertBox;