import { React } from "react";
import { useState } from "react";

export default function Register() {
    const [lol, setLol] = useState('no token')

    async function doSignup() {
        if (localStorage.getItem("token") == null || localStorage.getItem("token") == undefined) {
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
                setLol(result.data.token)
                console.log(result.data.token)
                localStorage.setItem("token", result.data.token);
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
            {localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ? (
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