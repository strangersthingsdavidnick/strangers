import { React } from "react";
import { useState } from "react";

export default function Register() {
    const [lol, setLol] = useState('no token')

    async function doSignup() {
        if (localStorage.getItem("token") == null) {
            console.log('signing up')
            try {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: `${(document.getElementById('signupUsername')).value}`,
                            password: `${(document.getElementById('signupPassword')).value}`
                        })
                    })
                const result = await response.json();
                setLol(result.token)
                localStorage.setItem("token", result.token);
            } catch (err) {
                console.error(err);
            }
        }
        else {
            console.log(`you are already signed in`)
        }
    }

    async function signOut() {
        if (lol != null) {
            console.log('signing out')
            setLol(null)
            localStorage.removeItem("token");
        }
        else {
            console.log(`you are already signed out`)
        }
    }

    return (
        <>
            {localStorage.getItem("token") == null ? (
                <>
                    <p>signup:</p>
                    <input id='signupUsername' type="text" placeholder="username" />
                    <input id='signupPassword' type="text" placeholder="password" />
                    <p onClick={doSignup} className='makeTheseADifferentColorPlease'>submit</p>
                </>
            ) : (
                <>
                    <p>you are signed in with token {localStorage.getItem("token")}</p>
                    <p onClick={signOut} className='makeTheseADifferentColorPlease'>sign out</p>
                </>
            )}
        </>
    )
}