import { useState } from "react";
import { sendMessage } from "./api-adapters"

const MessageUser = () =>{
    const [messageText, setMessageTest] = useState("")

    const handleButton = async (event) =>{
        event.preventDefault();
        try {
            const result = await sendMessage();

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        
        <form onSubmit={handleButton}>
            <label>
                Message: 
                <input
                type="text"
                value={messageText}
                onChange={(event)=>{
                    setMessageTest(event.target.value)
                }}
                ></input>
            </label>

            <button type="submit">Send</button>
        </form>
        </>
    )
}

export default MessageUser;