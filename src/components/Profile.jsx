import { useNavigate } from "react-router";

export default function Profile({ BASE_URL }) {
    const navigate = useNavigate()

    async function auth() {
        try {
            const response = await fetch(`${BASE_URL}/test/me`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
            const result = await response.json();
            document.getElementById('user').innerHTML = result.data.user.username

        } catch (err) { console.error(err); }
    }
    auth()

    async function signOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate('/')
    }


    return (
        <>
            <p>you are logged in as: </p>
            <p id="user"></p>

            <>
            <p onClick={signOut} >log out</p>
            </>
        </>
    )
}