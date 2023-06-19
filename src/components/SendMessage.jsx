import { useState } from "react";
import { sendMessage } from "./api-adapters";

const MessageUser = (aaa) => {
    const [messageText, setMessageText] = useState("");
    const [submittedMessage, setSubmittedMessage] = useState("");
    const postId = aaa.id;

    const handleButton = async (event) => {
        event.preventDefault();
        try {
            const result = await sendMessage(messageText, postId);
            setSubmittedMessage(messageText);
            setMessageText("");
        } catch (error) {
            console.log(error);
        }
    };

    // Clears submittedMessage
    const handleDelete = () => {
        setSubmittedMessage("");
    };

    return (
        <>
            <form className="messageContainer" onSubmit={handleButton}>
                <label>
                    Message:
                    <input
                        id="messageBox"
                        type="text"
                        value={messageText}
                        onChange={(event) => {
                            setMessageText(event.target.value);
                        }}
                    ></input>
                </label>

                <button type="submit">Send</button>
            </form>

            {submittedMessage && (
                <div>
                    <p>Reply: {submittedMessage}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </>
    );
};

export default MessageUser;
