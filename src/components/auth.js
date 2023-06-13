export default async function auth() {
    try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        const result = await response.json();
        if (result.success) { return true }
        else { return false }

    } catch (err) { console.error(err); }
}

//how to use this
//it will return true if auth works
//it will return false if auth doesnt work