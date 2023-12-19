import React, { useContext, useState } from "react";
import './style.css';
import { AlertMessagesContext } from "../../../context/AlertMessagesContext";
import { createAlertMessage } from "../../../util/alert-message";
import { Navigate, redirect, redirectDocument } from "react-router-dom";

const FeedBack = (props) => {
    const [feedbackContent, setFeedbackContent] = useState("");
    const [email, setEmail] = useState("");
    const [highlightFeedbackContent, setHighlightFeedbackContent] = useState(false);
    const [highlightEmail, setHighlightEmail] = useState(false);

    const {alertMessages, setAlertMessages} = useContext(AlertMessagesContext);

    const clearForm = () => {
        setFeedbackContent("");
        setEmail("");
    }

    const handleTextAreaChange = (event) => {
        setFeedbackContent(event.target.value);
        setHighlightFeedbackContent(false);
    }

    const handleInputChange = (event) => {
        setEmail(event.target.value);
        setHighlightEmail(false);
    }

    const sendFeedback = () => {
        setTimeout(() => {
            console.log("The message has been sent successfully.");
        }, 500);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setHighlightFeedbackContent(feedbackContent === "");
        setHighlightEmail(email === "")
        if (!email || !feedbackContent) return;
        sendFeedback();
        setAlertMessages([
            ...alertMessages,
            createAlertMessage("The message has been sent successfully.", false)
        ]);
        clearForm();
    }

    return (
        <main className="feedback container-lg" onSubmit={handleSubmit}>
            <div className="feedback__content">
                <form className="feedback__form">
                    <h2>Feedback</h2>
                    <div>
                        <label>Your question, feedback or wish:</label><br />
                        <textarea className="feedback__content-text"
                            onChange={handleTextAreaChange}
                            value={feedbackContent}
                            style={{ "border": `${highlightFeedbackContent ? "1px solid red" : ""} ` }}
                            name="feedback" id="" cols="50" rows="8"></textarea>
                    </div>

                    <div>
                        <label>Provide answer to email: </label><br />
                        <input className="feedback__email" type="text"
                            onChange={handleInputChange}
                            value={email}
                            style={{ "border": `${highlightEmail ? "1px solid red" : ""} ` }} />
                    </div>

                    <button className="button feedback__btn" type="submit">Send message</button>
                </form>
            </div>
        </main>
    );
}

export default FeedBack;