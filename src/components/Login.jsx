import { useState } from "react";

export default function Login(BASE_URL) {

    const [aa, setaa] = useState('LOL')

    async function login() {

        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: `${(document.getElementById('signupUsername')).value}`,
                        password: `${(document.getElementById('signupPassword')).value}`
                    }
                })
            });
            const result = await response.json();
            console.log(result);
            localStorage.setItem("token", result.data.token);
            setaa('aaaaa')

        } catch (err) {
            console.error(err);
            alert('wrong username or password')
        }
    }

    async function signOut() {
        localStorage.removeItem("token");
        setaa('bbbbb')
    }

    return (
        <>
            {localStorage.getItem("token") == undefined ? (
                <>
                    <input id='signupUsername' type="text" placeholder="username" />
                    <input id='signupPassword' type="text" placeholder="password" />
                    <p onClick={() => login()}>log in</p>
                </>
            ) : (
                <>
                    <p onClick={signOut} >log out</p>
                </>
            )}
        </>
    )
}