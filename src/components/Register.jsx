import { useState } from "react";

export default function Register() {

    const [aa, setaa] = useState('LOL')

    async function doSignup() {

        console.log('signing up')
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register',
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
        } catch (err) {
            console.error(err);
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