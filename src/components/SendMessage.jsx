export default function SendMessage({ BASE_URL, thingy }) {

    const postMessage = async (postid, message) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${postid}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    message: {
                        content: `${message}`,
                    }
                })
            });
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>

            <div className="new-message-container">
                <p>
                    message
                    <input id="newMessage" type="text" placeholder="Message" />
                </p>


                <button onClick={() => postMessage(thingy, document.getElementById("newMessage").value)} id="newMessageSubmit">
                    Message
                </button>
            </div>
        </>
    )
}