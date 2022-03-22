export const loginUser = async (userName, password) => {
    try {
        const res = await fetch(`http://localhost:3005/api/user/${userName}/${password}`)
        if (res) {
            const data = await res.json();
            console.log(data)

        }
    }
    catch (err) {
        console.log(err)
    }
    

}