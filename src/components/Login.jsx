import auth from "./auth.js"

export default function Login() {

    async function alertAuth() {
        let awoo = await auth()
        document.getElementById("authresult").innerHTML = awoo
    }

    const login = async () => {

        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login`, {
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

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <input id='signupUsername' type="text" placeholder="username" />
            <input id='signupPassword' type="text" placeholder="password" />
            <p onClick={() => login()} className='makeTheseADifferentColorPlease'>login</p>
            <p onClick={() => alertAuth(localStorage.getItem('token'))} className='makeTheseADifferentColorPlease'>click me to verify login</p>
            <p id="authresult"></p>
        </>
    )
}