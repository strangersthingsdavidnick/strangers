export default async function auth() {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/test/me',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        const result = await response.json();
        if (result.success) { return result.data.user.username }
        else { return false }

    } catch (err) { console.error(err); }
}

//how to use this
//it will return username if auth works
//it will return false if auth doesnt work