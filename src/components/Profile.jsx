
export default function Profile({ BASE_URL }) {

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


    return (
        <>
            <p>you are logged in as: </p>
            <p id="user"></p>
        </>
    )
}