export default function SendMessage({ BASE_URL }) {

    const postMessage = async (postid, message) => {
        try {
            console.log(postid)
            console.log(message)
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
            console.log(document.getElementById("newMessage").value)
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>

            <div className="new-message-container">
                <p>
                    post id
                    <input id="newMessageId" type="text" placeholder="Id" />
                </p>
                <p>
                    message
                    <input id="newMessage" type="text" placeholder="Message" />
                </p>


                <button onClick={() => postMessage(document.getElementById("newMessageId").value, document.getElementById("newMessage").value)} id="newMessageSubmit">
                    send
                </button>
            </div>
        </>
    )
}