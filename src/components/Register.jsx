import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register({ BASE_URL }) {
    const navigate = useNavigate();

    const [aa, setaa] = useState('LOL')

    async function doSignup() {
        const username = document.getElementById("signupUsername").value;
        console.log('signing up')
        try {
            const response = await fetch(`${BASE_URL}/users/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: `${(document.getElementById('signupUsername')).value}`,
                            password: `${(document.getElementById('signupPassword')).value}`
                        }
                    })
                })
            const result = await response.json();
            console.log(result.data.token)
            setaa('aaaaa')
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("currentUsername", username);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }



    async function signOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUsername");
        setaa('bbbbb')
    }

    return (
        <>
            {localStorage.getItem("token") == undefined ? (
                <>
                    <input id='signupUsername' type="text" placeholder="username" />
                    <input id='signupPassword' type="text" placeholder="password" />
                    <p onClick={doSignup} >create account</p>
                </>
            ) : (
                <>
                    <p onClick={signOut} >log out</p>
                </>
            )}
        </>
    )
}