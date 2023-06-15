import auth from "./auth"

export default function Profile() {

    async function alertAuth() {
        let awoo = await auth()
        document.getElementById("user").innerHTML = awoo
    }
    alertAuth()


    return (
        <>
            <p>you are logged in as: </p>
            <p id="user"></p>
        </>
    )
}