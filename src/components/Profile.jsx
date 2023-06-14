import auth from "./auth"

export default function Profile({ BASE_URL }) {

    async function alertAuth() {
        let awoo = await auth()
        document.getElementById("user").innerHTML = awoo
    }
    alertAuth()


    const deletePost = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${document.getElementById('deleteid')}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }




    //the delete button does not yet work

    return (
        <>
            <p>you are logged in as: </p>
            <p id="user"></p>
            <input type="text" id="deleteid" />
            <button id='snapper' onClick={deletePost}>delete this post</button>
        </>
    )
}