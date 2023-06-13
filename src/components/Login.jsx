import auth from "./auth.js"

export default function Login() {

    async function alertAuth() {
        let awoo = await auth()
        document.getElementById("authresult").innerHTML = awoo
    }

    return (
        <>
            <p onClick={alertAuth} className='makeTheseADifferentColorPlease'>click me to verify login</p>
            <p id="authresult"></p>
        </>
    )
}